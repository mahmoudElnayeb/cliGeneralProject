/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';
import Button from '../general/Button';
import {useEffect} from 'react';

export default function SubmitButton({
  title,
  type = 'primary',
  loading
}: {
  title: string;
  type?: 'primary' | 'default' | 'secondary';
  loading?: boolean
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
      loading={loading}
    />
  );
}

const styles = StyleSheet.create({});
