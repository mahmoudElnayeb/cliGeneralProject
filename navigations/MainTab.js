/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserScreen from '../screens/UserScreen';
import ComplaintScreen from '../screens/ComplaintScreen';
import Icon from '../components/general/Icon';
import TabActionButton from './TabActionButton';
import colors from '../config/colors';

import ProductList from '../screens/ProductList';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colors.white,
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="Settings"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon icon="account" color={color} size={60} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductList}
        options={{
          tabBarButton: props => <TabActionButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Complaints"
        component={ComplaintScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon icon="comment-alert-outline" color={color} size={60} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
