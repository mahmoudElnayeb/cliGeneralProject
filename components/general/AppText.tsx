import {StyleSheet, Text} from 'react-native';
import React from 'react';

export default function AppText({children, style , ...props}: any) {
  return <Text {...props} style={[styles.container, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    // textAlign: 'center',
    fontSize: 20,
  },
});
