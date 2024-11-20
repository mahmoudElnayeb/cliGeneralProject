/* eslint-disable react/react-in-jsx-scope */
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';
import {PRODUCT_ROUTE} from '../routers/prouductRoute';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProductNav = () => (
  <Stack.Navigator 
    initialRouteName={PRODUCT_ROUTE.LIST}
    screenOptions={{headerShown: false}}
  >
    <Stack.Screen 
      name={PRODUCT_ROUTE.LIST} 
      component={ProductList}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name={PRODUCT_ROUTE.ITEM}
      component={ProductDetails}
      options={({route}) => ({
        headerShown: true,
        headerTitle: route.params?.item.title,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      })}
    />
  </Stack.Navigator>
);

export default ProductNav;
