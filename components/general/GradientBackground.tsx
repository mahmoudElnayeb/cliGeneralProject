import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Screen from './Screen';

export default function GradientBackground({ children, style , hasHeader}: any) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f5d', '#9b4d96']}
        start={{ x: 0, y: 2 }}
        end={{ x: 2, y: 1 }}
        style={[styles.gradientContainer]}>
        <Screen style={[styles.content, style]} hasHeader={hasHeader}>
          {children}
        </Screen>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  gradientContainer: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
