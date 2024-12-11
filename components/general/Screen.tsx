/* eslint-disable @typescript-eslint/no-unused-vars */
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import defaultStyle from '../../config/styles';

export default function Screen({ children, style, hasHeader = false }: any) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.screen]}
      // keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <SafeAreaView style={[styles.container, style]}> 
        <View style={[
          styles.container,
          style,
          {paddingTop: hasHeader ? defaultStyle.cardPadding.headerPadding : 0}
        ]}>
          {children}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: defaultStyle.color.white,
  },
  container: {
    flex: 1,
    width: '100%',
  },
});
