/* eslint-disable react/react-in-jsx-scope */
import {HOME_ROUTE} from '../routers/homeModal';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';

// eslint-disable-next-line no-undef
const Stack = createStackNavigator();

const HomeNav = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={HOME_ROUTE.HOME} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeNav;
