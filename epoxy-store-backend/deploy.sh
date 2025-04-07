#!/bin/bash
set -e

echo "Starting deployment..."

# Pull latest changes
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm install

# Create public directory
echo "Setting up public directory..."
mkdir -p public/images
chmod 755 public
chmod 755 public/images

# Restart application
echo "Restarting application..."
pm2 delete epoxy-backend || true
pm2 start ecosystem.config.js

# Show status
echo "Checking status..."
sleep 2
pm2 list
pm2 logs epoxy-backend --lines 10

echo "Deployment completed!"