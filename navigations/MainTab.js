/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserScreen from '../screens/UserScreen';
import ComplaintScreen from '../screens/ComplaintScreen';
import Icon from '../components/general/Icon';
import TabActionButton from './TabActionButton';
import colors from '../config/colors';
import {useNavigation} from '@react-navigation/native';
import ProductNav from './ProductNav';
import ProductList from '../screens/ProductList';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {

  return (
    <Tab.Navigator
      initialRouteName="ProductsTap"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          alignSelf: 'center',
          marginTop: 6,
          fontWeight: 700,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        },
      }}>
      <Tab.Screen
        name="setting"
        component={UserScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon icon="account" color={color} size={60} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductsTap"
        component={ProductList}
        options={({navigation})=>({
          tabBarButton: ({}) => (
            <TabActionButton
              onPress={() => {
                navigation.navigate('ProductsTap');
              }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="complain"
        component={ComplaintScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon icon="comment-alert-outline" color={color} size={60} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
