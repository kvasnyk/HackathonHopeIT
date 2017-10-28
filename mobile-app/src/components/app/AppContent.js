import { Text, View } from 'react-native';

import AppContentRouter from './AppContentRouter';
import React from 'react';
import { Scene } from 'react-native-router-flux';

export default class AppContent extends React.Component {
  render = () => (
    <AppContentRouter />
  );
};