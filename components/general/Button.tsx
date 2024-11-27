/* eslint-disable react/react-in-jsx-scope */
import {Pressable, StyleSheet} from 'react-native';
import defaultStyle from '../../config/styles';
import AppText from './AppText';
import {useState} from 'react';
import Icon from './Icon';
import colors from '../../config/colors';
export default function Button({
  type = 'secondary',
  title,
  disabled,
  onPress,
  iconSize,
  icon,
  style
}: {
  type?: 'primary' | 'default' | 'secondary';
  title: string;
  disabled?: boolean;
  onPress: () => any;
  icon?:any
  iconSize?:number
  style?:any
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
        {icon && <Icon icon={icon} size={iconSize} color={colors.dark} />}
      {title && <AppText style={styles.text}> {title}</AppText>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    ...defaultStyle.buttonContainer,
    flexDirection: 'row',
     justifyContent:'center', 
     alignItems:'center'
  } as any,
  text: {
    ...defaultStyle.text,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
