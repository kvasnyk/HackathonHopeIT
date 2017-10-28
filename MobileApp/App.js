import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import AppContentRouter from './src/components/app/AppContentRouter';
import LoginScene from './src/components/accounts/LoginScene';

export default class App extends Component<{}> {
  render = () => (
    <Router>
      <Stack key="root">
        <Scene key="login" component={LoginScene} initial={true}/>
      </Stack>
    </Router>
  );
};
