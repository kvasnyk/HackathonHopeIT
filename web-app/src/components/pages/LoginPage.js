import AuthHelper from '../../helpers/AuthHelper';
import AxiosHelper from '../../helpers/AxiosHelper';
import FormRow from '../shared/FormRow';
import Page from '../shared/Page';
import React from 'react';
import T from 'i18n-react';

class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      dataUsername: '',
      dataPassword: ''
    };
  };
  
  handleUsernameValueChange = (e) => {
    const newValue = e.target.value;
    this.setState(prevState => ({ ...prevState, dataUsername: newValue }));
  };

  handlePasswordValueChange = (e) => {
    const newValue = e.target.value;
    this.setState(prevState => ({ ...prevState, dataPassword: newValue }));
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    AxiosHelper.token(this.state.dataUsername, this.state.dataPassword)
      .then(response => {
        AuthHelper.openSession(response.data.access_token);
        this.props.history.push('/');
      })
      .catch(error => {
        alert('ERROR');
      });
  };

  render = () => (
    <Page>
      <form onSubmit={this.handleFormSubmit}>
        <FormRow>
          <label>{T.translate('Username')}</label>
          <input type="text" value={this.state.dataUsername} onChange={this.handleUsernameValueChange} autoFocus />
        </FormRow>
        <FormRow>
          <label>{T.translate('Password')}</label>
          <input type="password" value={this.state.dataPassword} onChange={this.handlePasswordValueChange} />
        </FormRow>
        <button type="submit">{T.translate('LogIn')}</button>
      </form>
    </Page>
  );
};

export default LoginPage;