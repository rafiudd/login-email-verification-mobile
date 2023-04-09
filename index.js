/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import NavigationContainer from './app/routes/NavigationContainer';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NavigationContainer);
