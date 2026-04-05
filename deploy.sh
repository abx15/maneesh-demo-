#!/bin/bash

# Maneesh Yadav Portfolio Deployment Script

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Deploy to Vercel (if Vercel CLI is installed)
if command -v vercel &> /dev/null; then
    echo "🚀 Deploying to Vercel..."
    vercel --prod
else
    echo "⚠️  Vercel CLI not found. Install it with: npm i -g vercel"
    echo "📝 Or deploy manually through Vercel dashboard"
fi
