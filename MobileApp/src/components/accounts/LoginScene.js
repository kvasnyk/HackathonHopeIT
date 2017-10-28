import { Button, StyleSheet, TextInput, View } from 'react-native';

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

  handleButtonPress = () => {
    AxiosHelper.token(this.state.dataUsername, this.state.dataPassword)
    .catch(response => {
      AsyncStorage.token = response.data;
      alert("token saved: " + response.data)
    })
    .catch(error => {
      alert("fuck you");
    });
  };

  render = () => (
    <View style={styles.container}>
      <TextInput style={styles.textInput} autoCorrect={false} onChangeText={(text) => this.setState(prevState => ({ ...prevState, dataUsername: text }))} value={this.state.dataUsername} />
      <TextInput style={styles.textInput} autoCorrect={false} onChangeText={(text) => this.setState(prevState => ({ ...prevState, dataPassword: text }))} value={this.state.dataPassword} />
        <Button onPress={this.handleButtonPress} style={styles.button} title="Log in" />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue"
  },
  textInput: {
    marginBottom: "1%",
    flex: 0.8,
    backgroundColor: "white",
    borderRadius: 10
  }
});