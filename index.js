import { AppRegistry } from 'react-native';
import App from './src/index';

// 去除 Remote debugger ⚠️
console.ignoredYellowBox = ['Remote debugger']

AppRegistry.registerComponent('BookNative', () => App);
