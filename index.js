import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './app/containers/App';
import '@utils/common';

AppRegistry.registerComponent(appName, () => App);
