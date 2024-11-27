/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import { Image, StyleSheet, View } from 'react-native';
import Screen from '../components/general/Screen';
import Form from '../components/form/Form';
import * as Yup from 'yup';
import FormInput from '../components/form/FormInput';
import SubmitButton from '../components/form/SubmitButton';
export default function LoginScreen({ navigation }: any) {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().label('Email'),
    password: Yup.string().label('Password'),
  });
  return (
    <Screen style={styles.container}>
      <Image
        source={require('../assets/images/logo-red.png')}
        style={styles.logo}
      />
      <View style={styles.formContainer}>
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(form: any) => {
            console.log(form);
            navigation.navigate('main');
          }}>
          <FormInput
            name="email"
            keyboardType="email-address"
            placeholder="Email"
          />
          <FormInput
            name="password"
            keyboardType="default"
            secureTextEntry={true}
            placeholder="Password"
          />

          <SubmitButton title="Login" type="primary" />
        </Form>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50
  },
  logo: {
    width: 100,
    height: 100,
  },
  formContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
    width: "100%"
  },
});
