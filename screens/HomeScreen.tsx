/* eslint-disable react/react-in-jsx-scope */
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import Button from '../components/general/Button';
import AppText from '../components/general/AppText';
import {AUTH_ROUTE} from '../routers/authModal';

export default function HomeScreen({navigation}: any) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.container}
      source={require('../assets/images/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo-red.png')}
          style={styles.logo}
        />
        <AppText style={styles.logoText}> Sell what you don't need </AppText>
      </View>

      <View style={styles.actionsContainer}>
        <Button
          title="login"
          onPress={() =>
            navigation.navigate('auth', {screen: AUTH_ROUTE.LOGIN})
          }
          type="primary"
        />
        <Button
          title="Register"
          onPress={() =>
            navigation.navigate('auth', {screen: AUTH_ROUTE.REGISTER})
          }
          type="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 100,
    height: 100,
  },
  actionsContainer: {
    paddingHorizontal: 20,
    marginBlock: 20,
    width:"100%"
  },
  logoContainer: {
    alignItems: 'center',
    gap: 10,
    position: 'absolute',
    top: '20%',
  },
  logoText: {
    fontWeight: 700,
    fontSize: 25,
  },
});
