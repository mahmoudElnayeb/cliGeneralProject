/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet} from 'react-native';
import AppText from '../general/AppText';
import colors from '../../config/colors';
import {FormikErrors} from 'formik';

export default function ErrorMessage({
  error,
  visible,
}: {
  error: FormikErrors<unknown>;
  visible: boolean;
}) {
  if (!error || !visible) {
    return null;
  }
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    fontSize: 15,
  },
});
