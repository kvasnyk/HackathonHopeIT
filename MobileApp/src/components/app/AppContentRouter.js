import LoginScene from '../accounts/LoginScene';
import React from 'react';
import { Scene } from 'react-native-router-flux';

export default class AppContentRouter extends React.Component {
 render = () => (
  <Scene key="app-content">
    <Scene key="login" component={LoginScene} title="Login" initial={true} />
  </Scene>
 );
};
