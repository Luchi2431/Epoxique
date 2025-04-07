#!/bin/bash
set -e

echo "Starting deployment..."

# Pull latest changes
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm install

# Setup directories
echo "Setting up public directory..."
mkdir -p public/images
chmod 755 public
chmod 755 public/images

# Restart application
echo "Restarting application..."
pm2 delete epoxy-backend || true
sleep 2
pm2 start ecosystem.config.js

# Show status
echo "Checking status..."
sleep 2
pm2 list

echo "Deployment completed!"