import AuthHelper from '../../helpers/AuthHelper';
import { Link } from 'react-router-dom';
import React from 'react';
import T from 'i18n-react';
import { withRouter } from 'react-router-dom';

const logoImg = require('./../../img/logo_naratunek.png');

const AppNavbar = (props) => {
  const user = AuthHelper.getSession();

  const handleLogOutClick = () => {
    AuthHelper.clearSession();
    props.history.push('/');
  };

  const logInItem = user ? null : (
    <div className="menu-item">
      <Link to="/accounts/login">
        {T.translate('LogIn')}
      </Link>
    </div>
  );

  const logOutItem = user ? (
    <div className="menu-item" onClick={handleLogOutClick}>
      <a href="#">
        {T.translate('LogOut')}
      </a>
    </div>
  ) : null;

  const usersItem = user ? (
    <div className="menu-item">
      <Link to="/users">
        {T.translate('Users')}
      </Link>
    </div>
  ) : null;

  const messagesItem = user ? (
    <div className="menu-item">
      <Link to="/messages">
        {T.translate('Messages')}
      </Link>
    </div>
  ) : null;

  const sendMessageItem = user ? (
    <div className="menu-item">
      <Link to="/messages/send">
        {T.translate('SendMessage')}
      </Link>
    </div>
  ) : null;

  return (
    <div className="app-navbar">
      <div className="container">
        <Link to="/">
          <img className="logo" src={logoImg} alt="logo" />
        </Link>

        {logInItem}
        {logOutItem}
        {sendMessageItem}
        {messagesItem}
        {usersItem}
      </div>
    </div>
  );
}

export default withRouter(AppNavbar);