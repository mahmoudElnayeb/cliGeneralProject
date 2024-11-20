import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Icon({
  size = 40,
  icon = 'account',
  color = 'white',
  backgroundColor = 'transparent',
  onPress,
  style,
}: {
  size?: number;
  icon: string;
  color?: string;
  backgroundColor?: string;
  onPress?: () => any;
  style?: any;
}) {
  if (!onPress) {
    return (
      <View
        style={[
          styles.container,
          {
            width: size,
            height: size,
            borderRadius: size,
            backgroundColor: backgroundColor,
          },
          style,
        ]}>
        <MaterialCommunityIcons name={icon} size={size * 0.5} color={color} />
      </View>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size,
          backgroundColor: backgroundColor,
        },
      ]}>
      <MaterialCommunityIcons name={icon} size={size * 0.5} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 45,
  },
});
