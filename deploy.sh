#!/bin/bash

echo "Starting deployment..."

# Pull the latest changes from the main branch
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm install

# Rebuild if needed
echo "Building..."
npm run build --if-present

# Restart PM2 process
echo "Restarting application..."
pm2 restart epoxy-backend || pm2 start src/app.js --name "epoxy-backend"

echo "Deployment completed!"
