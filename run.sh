#!/bin/bash

# Kill any existing process on port 8081
lsof -ti:8081 | xargs kill -9 2>/dev/null

# Start Metro bundler in the background
npx react-native start --reset-cache &

# Wait a few seconds for Metro to initialize
sleep 5

# Run the iOS app
npx react-native run-ios
