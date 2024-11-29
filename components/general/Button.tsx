/* eslint-disable react/react-in-jsx-scope */
import { Pressable, StyleSheet, View } from 'react-native';
import defaultStyle from '../../config/styles';
import AppText from './AppText';
import { useState } from 'react';
import Icon from './Icon';
import colors from '../../config/colors';
import ActivityIndicator from './ActivityIndicator';
import ButtonLoader from './ButtonLoader';
export default function Button({
  type = 'secondary',
  title,
  disabled,
  onPress,
  iconSize,
  icon,
  style,
  loading 
}: {
  type?: 'primary' | 'default' | 'secondary';
  title: string;
  disabled?: boolean;
  onPress: () => any;
  icon?: any
  iconSize?: number
  style?: any,
  loading?: boolean
}) {
  const [isHovered, setIsHovered] = useState(true); // Track hover state

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[
        styles.container,
        {
          backgroundColor: disabled
            ? defaultStyle.button[type].disabled
            : isHovered
              ? defaultStyle.button[type].overlay
              : defaultStyle.button[type].background,
        },
        style
      ]}>
      <View style={{ position: 'relative', width: '100%', height: 60 , alignItems: 'center',
    justifyContent: 'center', }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
          {icon && <Icon icon={icon} size={iconSize} color={colors.dark} />}
          {title && <AppText style={styles.text}> {title}</AppText>}
        </View>
        {loading && <ButtonLoader visible={loading} style={styles.buttonLoader} />}
      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyle.buttonContainer,
    overflow: 'hidden',
  } as any,
  text: {
    ...defaultStyle.text,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonLoader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2
  }
});
