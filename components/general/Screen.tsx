/* eslint-disable @typescript-eslint/no-unused-vars */
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import defaultStyle from '../../config/styles';
import GradientBackground from './GradientBackground';

export default function Screen({ children, style }: any) {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaView style={[styles.container, style]}>
        {children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyle.color.white,
    width: '100%'
  },
});
