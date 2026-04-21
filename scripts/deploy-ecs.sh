#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/UPAIego-website"
APP_NAME="upaiego-web"

echo "==> Deploying ${APP_NAME} in ${APP_DIR}"
cd "${APP_DIR}"

echo "==> Pulling latest code"
git pull

echo "==> Installing dependencies"
npm install

echo "==> Building Next.js app"
npm run build

echo "==> Restarting PM2 process"
if pm2 describe "${APP_NAME}" >/dev/null 2>&1; then
  pm2 restart "${APP_NAME}"
else
  pm2 start npm --name "${APP_NAME}" -- start
fi

echo "==> Saving PM2 process list"
pm2 save

echo "==> Deployment completed successfully"
