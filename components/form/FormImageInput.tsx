import {StyleSheet} from 'react-native';
import React from 'react';
import ImageInputList from '../general/ImageInputList';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';

export default function FormImageInput({name}: {name: string}) {
  const {values, errors, touched, setFieldValue}: any = useFormikContext();
  return (
    <>
      <ImageInputList
        uris={values[name]}
        onImageAdd={(image: any) => {
          setFieldValue(name, [...values[name], image]);
        }}
        onImageRemove={(image: any) => {
          setFieldValue(
            name,
            values[name].filter((uri: any) => uri !== image),
          );
        }}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
