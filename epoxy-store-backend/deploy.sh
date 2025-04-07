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

# Stop existing process
echo "Stopping existing process..."
pm2 stop epoxy-backend || true
pm2 delete epoxy-backend || true

# Wait for process to stop
echo "Waiting for process to stop..."
sleep 3

# Start new process
echo "Starting new process..."
pm2 start ecosystem.config.js

# Wait for process to start
echo "Waiting for process to start..."
sleep 3

# Show status
echo "Process status:"
pm2 list

echo "Deployment completed!"