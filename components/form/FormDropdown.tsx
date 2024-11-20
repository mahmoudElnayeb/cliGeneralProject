/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/rules-of-hooks */
import {StyleSheet, View} from 'react-native';
import {useFormikContext} from 'formik';
import Dropdown from '../general/Dropdown';
import ErrorMessage from './ErrorMessage';

export default function FormDropdown({
  name,
  placeholder,
  options,
}: {
  name: string;
  placeholder: string;
  options: any;
}) {
  const {values, touched, errors, setFieldValue, setFieldTouched} =
    useFormikContext();
  return (
    <View>
      <Dropdown
        selectedItem={values[name]}
        onSelectItem={item => {
          console.log('====================================');
          console.log(item);
          console.log('====================================');
          setFieldValue(name, item);
          setFieldTouched(name);
        }}
        options={options}
        placeholder={placeholder}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({});
