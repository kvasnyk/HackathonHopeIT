import React, { Component } from 'react';

import AppContent from '../app/AppContent';
import AppFooter from '../app/AppFooter';
import AppNavbar from '../app/AppNavbar';
import { BrowserRouter } from 'react-router-dom';
import T from 'i18n-react';

const locales = require('./../../locales/pl.json');

class AppContainer extends Component {
  componentWillMount = () => {
    T.setTexts(locales);
  };

  render = () => (
    <BrowserRouter>
      <div className="app-container">
        <AppNavbar />
        <AppContent />
        <AppFooter />
      </div>
    </BrowserRouter>
  );
};

export default AppContainer;
