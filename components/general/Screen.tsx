/* eslint-disable @typescript-eslint/no-unused-vars */
import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import defaultStyle from '../../config/styles';

export default function Screen({ children, style , hasHeader }: any) {
  return (
    <View style={[
      styles.container,
       style ,
       {paddingTop: hasHeader ? defaultStyle.cardPadding.headerPadding : 0}
       ]}>
      <SafeAreaView style={[styles.container, style]}>
        {children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  }
});
