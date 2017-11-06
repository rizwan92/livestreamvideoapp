import App from './app/App';
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';



export default class Video extends Component {
  render() {
    return (
      <App />
    );
  }
}
AppRegistry.registerComponent('video', () => Video);
