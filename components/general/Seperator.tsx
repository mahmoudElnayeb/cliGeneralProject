/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View} from 'react-native';

export default function Seperator() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: 'transparent',
  },
});
