/* eslint-disable react/react-in-jsx-scope */
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';
import {PRODUCT_ROUTE} from '../routers/prouductRoute';
import {createStackNavigator} from '@react-navigation/stack';
import Button from '../components/general/Button';

const Stack = createStackNavigator();

const ProductNav = ({ route }) => {
  
  return (
    <Stack.Navigator 
      initialRouteName={PRODUCT_ROUTE.ITEM}
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen
        name={PRODUCT_ROUTE.ITEM}
        component={ProductDetails}
        initialParams={ {item:route?.params?.item} }
      />
    </Stack.Navigator>
  );
};

export default ProductNav;
