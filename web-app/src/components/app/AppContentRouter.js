import { Route, Switch } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import MessagePage from '../pages/MessagePage';
import MessagesPage from '../pages/MessagesPage';
import React from 'react';
import SendMessagePage from '../pages/SendMessagePage';
import UsersPage from '../pages/UsersPage';

const AppContentRouter = (props) => (
  <Switch>
    <Route exact path="/accounts/login" component={LoginPage} />

    <Route exact path="/messages" component={MessagesPage} />
    <Route exact path="/messages/send" component={SendMessagePage} />
    <Route exact path="/messages/:messageId" component={MessagePage} />

    <Route exact path="/users" component={UsersPage} />
  </Switch>
);

export default AppContentRouter;