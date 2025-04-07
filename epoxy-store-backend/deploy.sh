#!/bin/bash
echo "Starting deployment..."

# Pull latest changes
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm install

# Create public directory if it doesn't exist
echo "Setting up public directory..."
mkdir -p public/images
chmod 755 public
chmod 755 public/images

# Restart the application
echo "Restarting application..."
pm2 delete epoxy-backend
pm2 start ecosystem.config.js

echo "Deployment completed!"