#!/usr/bin/env bash
# Deploys the form backend (infra/contact-form.yaml).
#   1. Stores SENDGRID_API_KEY from .env in SSM Parameter Store (SecureString)
#   2. Packages backend/contact-form and uploads it to a private artifacts bucket
#   3. Creates or updates the CloudFormation stack and prints the form endpoint
#
# Usage: infra/deploy-contact-form.sh
# Settings come from .env: SENDGRID_API_KEY, FORM_TO_EMAILS, FORM_FROM_EMAIL,
# FORM_ALLOWED_ORIGINS (comma-separated), optional FORM_STACK_NAME.
set -euo pipefail
cd "$(dirname "$0")/.."

# Read KEY=VALUE lines from .env without executing it
envval() { grep -E "^$1=" .env | tail -n1 | cut -d= -f2-; }

STACK="$(envval FORM_STACK_NAME)"; STACK="${STACK:-grantready-contact-form}"
REGION="$(aws configure get region)"
ACCOUNT="$(aws sts get-caller-identity --query Account --output text)"
ARTIFACTS="grantready-artifacts-${ACCOUNT}-${REGION}"
PARAM="/grantready/sendgrid-api-key"

for v in SENDGRID_API_KEY FORM_TO_EMAILS FORM_FROM_EMAIL FORM_ALLOWED_ORIGINS; do
  [ -n "$(envval "$v")" ] || { echo "Missing $v in .env" >&2; exit 1; }
done

echo "Storing SendGrid key in SSM ($PARAM)"
aws ssm put-parameter --name "$PARAM" --type SecureString --overwrite \
  --value "$(envval SENDGRID_API_KEY)" --output json >/dev/null

if ! aws s3api head-bucket --bucket "$ARTIFACTS" 2>/dev/null; then
  echo "Creating private artifacts bucket $ARTIFACTS"
  aws s3api create-bucket --bucket "$ARTIFACTS" --output json >/dev/null
  aws s3api put-public-access-block --bucket "$ARTIFACTS" --public-access-block-configuration \
    BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
fi

ZIP="$(mktemp -d)/contact-form.zip"
(cd backend/contact-form && zip -q -r "$ZIP" .)
KEY="contact-form/$(sha256sum "$ZIP" | cut -c1-16).zip"
aws s3 cp "$ZIP" "s3://$ARTIFACTS/$KEY" --only-show-errors

echo "Deploying stack $STACK"
aws cloudformation deploy --stack-name "$STACK" --template-file infra/contact-form.yaml \
  --capabilities CAPABILITY_IAM --no-fail-on-empty-changeset \
  --parameter-overrides CodeBucket="$ARTIFACTS" CodeKey="$KEY" \
    AllowedOrigins="$(envval FORM_ALLOWED_ORIGINS)" ToEmails="$(envval FORM_TO_EMAILS)" \
    FromEmail="$(envval FORM_FROM_EMAIL)" SendGridKeyParam="$PARAM"

URL="$(aws cloudformation describe-stacks --stack-name "$STACK" \
  --query "Stacks[0].Outputs[?OutputKey=='FormEndpoint'].OutputValue" --output text)"
echo "Form endpoint: $URL"
echo "Set VITE_FORM_ENDPOINT=$URL in .env, then rebuild and deploy the site."
