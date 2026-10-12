# GrantReady

Marketing site for GrantReady, built with React, React Router and Vite.

## Run locally

```
npm install
npm run dev
```

Then open http://localhost:5173.

## Configuration

Settings live in `src/config.js` and can be overridden with environment
variables. Copy `.env.example` to `.env` and edit it; values are read at build
time, so rebuild after changing them. `.env` files are git-ignored.

| Variable            | Used for                                                                              | Default              |
| ------------------- | ------------------------------------------------------------------------------------- | -------------------- |
| `VITE_CALENDLY_URL` | Booking calendar on the contact page and "book a consultation" links in blog articles | Lina's Calendly page |

For example, after Lina creates a 30-minute event:

```
VITE_CALENDLY_URL=https://calendly.com/lina-grantready/30min
```

The URL must be on `calendly.com`, which the Content Security Policy allows.

## Build

```
npm run build
```

The production site is written to `dist/`. Preview it with `npm run preview`.

## Project structure

```
index.html              Vite entry page (fonts, favicon)
public/assets/img/      Images, served as-is at /assets/img/...
infra/
  cloudformation.yaml   S3 bucket + CloudFront hosting
src/
  main.jsx              App bootstrap and router
  App.jsx               Route table, one route per page
  components/           Layout, Nav, Footer and interactive pieces
                        (Estimator, BenefitCalculator, Quiz, Tabs, EnquiryForm,
                        CalendlyEmbed, CaseVisual)
  pages/                One component per page
  data/posts.json       Blog articles
  hooks/usePageMeta.js  Page title and meta description
  utils/formSecurity.js Form protection rules (honeypot, rate limit, sanitising)
  utils/money.js        Currency formatting
  styles/style.css      Site styles
```

## Security

### Forms

Both forms (contact page and homepage booking) go through
`src/components/EnquiryForm.jsx`, with the protection rules in
`src/utils/formSecurity.js`.

| Threat                  | Handling                                                                                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Invalid input           | Required fields, email format, Australian phone format (mobile, landline or +61), letters-only names, length limits. Errors show under each field. |
| Email typos             | Common provider misspellings (e.g. `gamail.com`, `gmail.con`) prompt "Did you mean ...@gmail.com?".                                                |
| Spam bots               | Hidden honeypot field (`website`); if filled, the submission is dropped but the bot is shown success.                                              |
| Instant submissions     | Forms submitted under 3 seconds after loading are treated as bots and dropped the same way.                                                        |
| Flooding                | Max 3 submissions per 10 minutes per browser (stored in `localStorage`).                                                                           |
| HTML / script injection | Single-line fields reject `<`, `>`, `javascript:`; the message rejects tags like `<script>`, `<iframe>`, `<img>` and `on...=` handlers.            |
| Header injection        | Line breaks can't be entered in single-line fields; `cleanValues()` strips control characters and collapses whitespace.                            |

`EnquiryForm` accepts an `onSubmitData(values)` prop that receives the cleaned
values. **When a backend or form service is connected, it must repeat these
checks on the server.** Client-side checks only filter honest mistakes and
simple bots; anyone can bypass them by sending requests directly. Add a CAPTCHA
(e.g. Cloudflare Turnstile) and server-side rate limiting at the same time.

### Content Security Policy

Production builds include a CSP `<meta>` tag (added by the `csp-meta` plugin in
`vite.config.js`; it's skipped in `npm run dev` because hot reload uses inline
scripts). It allows:

- scripts from the site itself and `assets.calendly.com` only
- styles from the site, Google Fonts and Calendly
- fonts from Google Fonts, images from the site and HTTPS sources
- iframes from `calendly.com` only
- no plugins (`object-src 'none'`), no `<base>` changes, forms post to the site only

React escapes all rendered text, so user input is never inserted as HTML.

**If you add a third-party script, font, iframe or API**, add its domain to the
CSP in both `vite.config.js` and `infra/cloudformation.yaml`, or the browser
will block it.

### Hosting headers

The CloudFormation template's response headers policy adds:

- `Strict-Transport-Security` (HTTPS only, one year, subdomains included)
- `Content-Security-Policy` (same as above, plus `frame-ancestors 'self'` against clickjacking)
- `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` disabling camera, microphone, geolocation and payment

The S3 bucket is private and encrypted; only the CloudFront distribution can
read it.

## Creating the hosting with CloudFormation

`infra/cloudformation.yaml` creates:

- a private, encrypted S3 bucket with versioning (no public access)
- a CloudFront distribution that reads the bucket through Origin Access Control
- HTTPS redirect and security headers
- the `index.html` fallback that clean URLs like `/rdti` need

```
aws cloudformation deploy \
  --stack-name grantready-site \
  --template-file infra/cloudformation.yaml \
  --parameter-overrides BucketName=<unique-bucket-name>

aws cloudformation describe-stacks --stack-name grantready-site \
  --query "Stacks[0].Outputs" --output table
```

The outputs give the bucket name, distribution ID and site URL. A new
distribution takes a few minutes to finish deploying. If the stack is deleted,
the bucket is kept (`DeletionPolicy: Retain`) so site files aren't lost.

## Deploying the site

```
npm run build
# Hashed bundles and fonts never change: cache them for a year
aws s3 sync dist/assets s3://<bucket-name>/assets --exclude "img/*" --cache-control "public, max-age=31536000, immutable"
# Images: one week
aws s3 sync dist/assets/img s3://<bucket-name>/assets/img --cache-control "public, max-age=604800"
# Pages and site files: always revalidate so updates show straight away
aws s3 sync dist s3://<bucket-name> --exclude "assets/*" --cache-control "no-cache"
aws cloudfront create-invalidation --distribution-id <distribution-id> --paths "/*"
```

`npm run build` pre-renders every page to static HTML (`dist/<route>/index.html`,
plus `404.html`) and writes `robots.txt`, `sitemap.xml`, `llms.txt` and
`.well-known/ai-catalog.json`. Set `VITE_SITE_URL` to the public address (for
example a custom domain) so canonical links and the sitemap point at it.

The CloudFormation template adds a CloudFront Function that serves `/rdti`
from `/rdti/index.html`, and returns `404.html` with status 404 for unknown
paths. On a distribution created by hand, add the same viewer-request function.
