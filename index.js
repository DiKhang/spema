/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/containers/App';
import '@utils/common';
import {} from '@utils//service/firebase';

AppRegistry.registerComponent(appName, () => App);
