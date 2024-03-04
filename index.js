// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


// index.js
// import React from 'react';
// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// index.js
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';

// const Main = () => (   
//   <App />
// );

AppRegistry.registerComponent(appName, () => App);
