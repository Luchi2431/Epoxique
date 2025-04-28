#!/bin/bash
set -e

echo "Starting deployment..."

echo "Stashing local changes..."
git stash

# Pull latest changes from main branch 
git fetch origin main
git reset --hard origin/main

# Install dependencies
echo "Installing dependencies..."
npm install

#restart application
echo "Restarting application..."
pm2 restart epoxy-backend

echo "Restarting Nginx"
systemctl restart nginx



echo "Deployment completed!"