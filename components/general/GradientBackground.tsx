import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function GradientBackground({children, style}: any) {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f5d', '#9b4d96']}
      start={{x: 0, y: 2}}
      end={{x: 2, y: 1}}
      style={[styles.gradientContainer, style]}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1, // Fill the whole screen
  },
  blurView: {
    // flex: 1,
  },
  content: {
    backgroundColor: 'transparent', // Transparent background for children content,
  },
});
