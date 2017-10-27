import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet, Text, View, } from 'react-native';

import AppContent from './src/components/app/AppContent';
import React from 'react';

export default class App extends React.Component {
  render = () => (
      <Router>
        <Scene key="root">
          <Scene key="app-content"  component={AppContent} />
        </Scene>
      </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
