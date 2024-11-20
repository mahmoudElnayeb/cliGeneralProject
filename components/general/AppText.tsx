import {StyleSheet, Text} from 'react-native';
import React from 'react';

export default function AppText({children, style}: any) {
  return <Text style={[styles.container, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    // textAlign: 'center',
    fontSize: 20,
  },
});
