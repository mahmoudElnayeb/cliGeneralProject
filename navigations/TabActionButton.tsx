import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Icon from '../components/general/Icon';
import colors from '../config/colors';

export default function TabActionButton({onPress}: {onPress?: () => any}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon
        icon="collage"
        color={colors.primary}
        size={60}
        backgroundColor={colors.white}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 6,
    borderRadius: 50,
    bottom: 30,
    height: 100,
    justifyContent: 'center',
    width: 100,
    // alignSelf: 'center',
  },
});
