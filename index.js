import { AppRegistry } from 'react-native';
import App from './App';

// Initialize Firebase
const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyAk99tnXoeNDwwLW0sSjCYILrtU4sO4_eI",
    authDomain: "dingdong-1ec3d.firebaseapp.com",
    databaseURL: "https://dingdong-1ec3d.firebaseio.com",
    storageBucket: "dingdong-1ec3d.appspot.com",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

AppRegistry.registerComponent('DingDongCollectApp', () => App);
