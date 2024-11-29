/* eslint-disable @typescript-eslint/no-unused-vars */
import {DimensionValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useFormikContext} from 'formik';
import InputText from '../inputs/InputText';
import ErrorMessage from './ErrorMessage';

export default function FormInput({
  name,
  placeholder,
  width = '100%',
  keyboardType = 'default',
  secureTextEntry = false,
  icon,
  numberOfLines,
}: {
  name: string;
  placeholder?: string;
  value?: string;
  width?: DimensionValue | undefined;
  keyboardType?: 'email-address' | 'default' | 'numeric';
  secureTextEntry?: boolean;
  icon?: string;
  numberOfLines?: number;
}) {
  const {values, errors, setFieldTouched, touched, setFieldValue}: any =
    useFormikContext();
  return (
    <View style={styles.container}>
      <InputText
        value={values[name]}
        onChangeText={text => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        width={width}
        style={[styles.input , {borderColor: (errors[name]&& touched[name] )? 'red' : 'transparent'}]}
        icon={icon}
        numberOfLines={numberOfLines}
        

      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  input: {
    height: 60,
  },
});
