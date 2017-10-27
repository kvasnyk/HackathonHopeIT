import '../../styles/AppContainer.css';

import React, { Component } from 'react';

import AppContent from '../app/AppContent';
import AppFooter from '../app/AppFooter';
import AppNavbar from '../app/AppNavbar';
import { BrowserRouter } from 'react-router-dom';

class AppContainer extends Component {
  render = () => (
    <BrowserRouter>
      <div>
        <AppNavbar />
        <AppContent />
        <AppFooter />
      </div>
    </BrowserRouter>
  );
};

export default AppContainer;
