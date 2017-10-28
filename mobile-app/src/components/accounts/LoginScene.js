import { Button, TextInput, View } from 'react-native';

import AxiosHelper from '../../helpers/AxiosHelper';
import React from 'react';

export default class LoginScene extends React.Component {
  constructor() {
    super();

    this.state = {
      dataUsername: '',
      dataPassword: ''
    };
  };

  handleSubmitButtonClick = () => {
    AxiosHelper.token(this.state.dataUsername, this.state.dataPassword)
    .then(response => {debugger;
      alert("ok")
    })
    .catch(error => {debugger;
      alert("fail")
    });
  };

  render = () => (
    <View>
      <TextInput onChangeText={(text) => this.setState(prevState => ({ ...prevState, dataUsername: text }))} value={this.state.dataUsername} />
      <TextInput onChangeText={(text) => this.setState(prevState => ({ ...prevState, dataPassword: text }))} value={this.state.dataPassword} />
      <Button onPress={this.handleSubmitButtonClick} title="Log in" />  
    </View>
  );
};
