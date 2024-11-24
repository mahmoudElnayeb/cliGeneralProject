/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


global.useMock = false;

AppRegistry.registerComponent(appName, () => App);
