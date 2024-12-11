/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthNav from './navigations/AuthNav';
import HomeNav from './navigations/HomeNav';
import ProductNav from './navigations/ProductNav';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationTheme from './config/NavigationTheme';
import UserScreen from './screens/UserScreen';
import AddProduct from './screens/AddProduct';
import MainTabNavigator from './navigations/MainTab';
import ProductList from './screens/ProductList';
import {PRODUCT_ROUTE} from './routers/prouductRoute';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        {/* <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
          <NavigationContainer theme={NavigationTheme}>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="welcome" component={HomeNav} />
              <Stack.Screen name="addProduct" component={AddProduct} />
              <Stack.Screen name="user" component={UserScreen} />
              <Stack.Screen 
                name="products" 
                component={ProductNav}
                options={{presentation: 'card' , animation:'slide_from_bottom'}}
              />
              <Stack.Screen name="auth" component={AuthNav} />
              <Stack.Screen name="main" component={MainTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        {/* </KeyboardAvoidingView> */}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

export default App;
