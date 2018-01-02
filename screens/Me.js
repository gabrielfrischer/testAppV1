import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView, 
  StyleSheet
} from 'react-native';
import { Constants } from 'expo';

class Me extends Component {
  
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.paragraph}>
        Me
      </Text>
    </View>
      </ScrollView>
    );
  }
}

export default Me;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
