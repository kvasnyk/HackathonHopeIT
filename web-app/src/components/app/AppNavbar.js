import React from 'react';

const logoImg = require('./../../img/logo_naratunek.png');

const AppNavbar = (props) => (
  <div className="app-navbar">
    <div className="container">
      <img className="logo" src={logoImg} alt="logo" />
    </div>
  </div>
);

export default AppNavbar;