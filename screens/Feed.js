import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView, 
  StyleSheet
} from 'react-native';
import { Card } from 'react-native-elements'; // 0.18.5
import { Constants } from 'expo';

class Feed extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.paragraph}>
        Feed
      </Text>
    </View>
      </ScrollView>
    );
  }
}

export default Feed;


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
