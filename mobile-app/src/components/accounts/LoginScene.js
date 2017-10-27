import { TextInput, View } from 'react-native';

import React from 'react';

export default class LoginScene extends React.Component {
  constructor() {
    super();

    this.state = {
      dataUsername: '',
      dataPassword: ''
    };
  };

  render = () => (
    <View>
      <TextInput onChangeText={(text) => this.setState(prevState => ({ ...prevState, dataUsername: text }))} value={this.state.dataUsername} />
      <TextInput onChangeText={(text) => this.setState(prevState => ({ ...prevState, dataPassword: text }))} value={this.state.dataPassword} />
    </View>
  );
};