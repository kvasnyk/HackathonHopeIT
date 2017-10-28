import { AnimatedSwitch } from 'react-router-transition';
import LoginPage from '../pages/LoginPage';
import MessagePage from '../pages/MessagePage';
import MessagesPage from '../pages/MessagesPage';
import React from 'react';
import { Route } from 'react-router-dom';
import SendMessagePage from '../pages/SendMessagePage';
import UserPage from '../pages/UserPage';
import UsersPage from '../pages/UsersPage';

const AppContentRouter = (props) => (
  <AnimatedSwitch
    atEnter={{ opacity: 0}}
    atLeave={{ opacity: 0}}
    atActive={{ opacity: 1}}
    className="switch-wrapper">
    <Route exact path="/accounts/login" component={LoginPage} />

    <Route exact path="/messages" component={MessagesPage} />
    <Route exact path="/messages/send" component={SendMessagePage} />
    <Route exact path="/messages/:messageId" component={MessagePage} />

    <Route exact path="/users" component={UsersPage} />
    <Route exact path="/users/:userId" component={UserPage} />
  </AnimatedSwitch>
);

export default AppContentRouter;