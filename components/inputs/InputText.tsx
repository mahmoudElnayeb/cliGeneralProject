/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {DimensionValue, StyleSheet, TextInput, View} from 'react-native';
import customStyles from '../../config/styles';
import Icon from '../general/Icon';

export default function InputText({
  placeholder,
  value,
  onChangeText,
  onBlur,
  width = '100%',
  keyboardType = 'default',
  secureTextEntry = false,
  style,
  icon,
  numberOfLines,
}: {
  placeholder?: string;
  icon?: string;
  value?: string;
  numberOfLines?: number;
  width?: DimensionValue | undefined;
  onChangeText: (value: any) => any;
  onBlur: () => any;
  keyboardType?: 'email-address' | 'default' | 'numeric';
  secureTextEntry?: boolean;
  style: any;
}) {
  return (
    <View style={[styles.inputContainer, {width}, style]}>
      <Icon
        icon={icon}
        color={customStyles.color.medium}
        backgroundColor="transparent"
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        numberOfLines={numberOfLines}
        style={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    ...customStyles.inputContiner,
    ...customStyles.text,
  },
  text: {
    fontSize: 18,
    flex: 1,
  },
});
