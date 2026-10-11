import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Content Security Policy: only our own scripts and Calendly may run; Google Fonts for type.
// Added to production builds only (the dev server relies on inline scripts for hot reload).
export const CSP = [
  "default-src 'self'",
  "script-src 'self' https://assets.calendly.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://assets.calendly.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https:",
  'frame-src https://calendly.com',
  "connect-src 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')

const cspMeta = {
  name: 'csp-meta',
  apply: 'build',
  transformIndexHtml: html =>
    html.replace('<meta charset="utf-8">', `<meta charset="utf-8">\n<meta http-equiv="Content-Security-Policy" content="${CSP}">`),
}

export default defineConfig({
  plugins: [react(), cspMeta],
})
