import { Route, Switch } from 'react-router-dom';

import LoginPage from '../accounts/LoginPage';
import React from 'react';

const AppContentRouter = (props) => (
  <Switch>
    <Route path="/accounts/login" component={LoginPage} />
    
  </Switch>
);

export default AppContentRouter;