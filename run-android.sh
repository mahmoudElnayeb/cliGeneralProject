#!/bin/bash

# Kill any existing process on port 8081
lsof -ti:8081 | xargs kill -9 2>/dev/null

# Start the Android emulator in the background
# Get the first available emulator
EMULATOR_NAME=$(emulator -list-avds | head -n 1)

if [ -z "$EMULATOR_NAME" ]; then
    echo "No Android emulator found. Please create one using Android Studio."
    exit 1
fi

# Start the emulator
echo "Starting Android emulator: $EMULATOR_NAME"
$ANDROID_HOME/emulator/emulator -avd $EMULATOR_NAME &

# Wait for the emulator to fully boot
echo "Waiting for emulator to boot..."
$ANDROID_HOME/platform-tools/adb wait-for-device

# Start Metro bundler in the background
echo "Starting Metro bundler..."
npx react-native start --reset-cache &

# Wait a few seconds for Metro to initialize
sleep 5

# Run the Android app
echo "Building and installing the app..."
npx react-native run-android
