import { Route, Switch } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import React from 'react';
import SendMessagePage from '../pages/SendMessagePage';

const AppContentRouter = (props) => (
  <Switch>
    <Route path="/accounts/login" component={LoginPage} />

    <Route path="/messages/send" component={SendMessagePage} />
  </Switch>
);

export default AppContentRouter;