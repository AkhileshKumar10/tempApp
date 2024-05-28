/**
 * @format
 */

import { AppRegistry } from 'react-native';
import AppPro from './AppPro'; // Assuming AppPro.js is in the same directory
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppPro);

