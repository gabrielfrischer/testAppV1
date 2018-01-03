import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView, 
  StyleSheet,
  Image
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
      <Card title="Local Modules">
      <View >
        <Text >
          Local files and assets can be imported by dragging and dropping them into the editor
        </Text>
        <Image source={require("../assets/expo.symbol.white.png")}/>
      </View>
        </Card>
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
