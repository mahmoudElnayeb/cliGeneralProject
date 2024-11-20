/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';
import Button from '../general/Button';
import {useEffect} from 'react';

export default function SubmitButton({
  title,
  type = 'primary',
}: {
  title: string;
  type?: 'primary' | 'default' | 'secondary';
}) {
  useEffect(() => {
    (() => validateForm())();
  }, []);
  const {handleSubmit, isValid, validateForm} = useFormikContext();

  return (
    <Button
      onPress={() => handleSubmit()}
      title={title}
      type={type}
      disabled={!isValid}
    />
  );
}

const styles = StyleSheet.create({});
