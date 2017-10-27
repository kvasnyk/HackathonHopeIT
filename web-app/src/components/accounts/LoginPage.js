import Page from '../forms/Page';
import React from 'react';

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

  render = () => (
    <Page>
      <form>
        <input type="text" value={this.state.dataUsername} onChange={this.handleUsernameValueChange} />
        <input type="password" value={this.state.dataPassword} onChange={this.handlePasswordValueChange} />
      </form>
    </Page>
  );
};

export default LoginPage;