/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

import LoginScreen from '../screens/LoginScreen';
import {AUTH_ROUTE} from '../routers/authModal';
import RegisterScreen from '../screens/RegisterScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthNav = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={AUTH_ROUTE.REGISTER} component={RegisterScreen} />
    <Stack.Screen name={AUTH_ROUTE.LOGIN} component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthNav;
