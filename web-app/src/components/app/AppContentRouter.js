import { Route, Switch } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import MessagesPage from '../pages/MessagesPage';
import React from 'react';
import SendMessagePage from '../pages/SendMessagePage';

const AppContentRouter = (props) => (
  <Switch>
    <Route exact path="/accounts/login" component={LoginPage} />

    <Route exact path="/messages" component={MessagesPage} />
    <Route exact path="/messages/send" component={SendMessagePage} />
  </Switch>
);

export default AppContentRouter;