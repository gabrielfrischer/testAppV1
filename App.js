import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Tabs } from './config/router';

class App extends Component {
  render() {
    return <Tabs/>;
  }
}

export default App;