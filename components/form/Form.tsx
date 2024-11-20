/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/self-closing-comp */
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
export default function Form({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: {
  initialValues: any;
  onSubmit: (value: any) => any;
  validationSchema: any;
  children: any;
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <View style={styles.container}>{children}</View>}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});
