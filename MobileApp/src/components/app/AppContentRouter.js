import { Scene, Stack } from 'react-native-router-flux';

import LoginScene from '../accounts/LoginScene';
import React from 'react';

export default class AppContentRouter extends React.Component {
 render = () => (
  <Stack key="app-content">
    <Scene key="login" component={LoginScene} title="Login" initial={true} />
  </Stack>
 );
};
