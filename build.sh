#!/bin/bash

echo "🧹 Starting cleanup process..."

# Remove node_modules and package-lock.json
echo "📦 Removing node_modules..."
rm -rf node_modules
rm -rf package-lock.json

# Remove Android build files and gradlew
echo "🤖 Cleaning Android build files..."
cd android
rm -rf build
rm -rf .gradle
./gradlew clean
cd ..
rm -rf android/app/build
rm -rf android/.gradle
rm -rf android/build

# Remove iOS pods
echo "🍎 Cleaning iOS pods..."
cd ios
rm -rf Pods
rm -rf Podfile.lock
cd ..

# Reinstall dependencies
echo "📥 Reinstalling node modules..."
npm install

# Install iOS pods
echo "🍎 Installing iOS pods..."
cd ios
pod install
cd ..

# Build Android
echo "🤖 Building Android..."
cd android
./gradlew assembleDebug
cd ..

# Build iOS
echo "🍎 Building iOS..."
cd ios
xcodebuild -workspace general.xcworkspace -scheme general -configuration Debug -sdk iphonesimulator -derivedDataPath build
cd ..

# Run Android
echo "🤖 Running Android..."
npx react-native start --reset-cache

# Run iOS Simulator
echo "🍎 Running iOS Simulator..."
# npx react-native run-ios --simulator="iPhone 14"

echo "✅ Cleanup and rebuild process completed!"
