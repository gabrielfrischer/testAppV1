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

class Home extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.paragraph}>
        Home
      </Text>
      <Card title="Standing Balance">
      <View >
        <Text >
          Local files and assets can be imported by dragging and dropping them into the editor
        </Text>
        <Image source={require("../assets/expo.symbol.white.png")}/>
      </View>
        </Card>
        <Card title="Walking Speed">
      <View >
        <Text >
          Local files and assets can be imported by dragging and dropping them into the editor
        </Text>
        <Image source={require("../assets/expo.symbol.white.png")}/>
      </View>
        </Card>
        <Card title="Stride Length">
      <View >
        <Text >
          Local files and assets can be imported by dragging and dropping them into the editor
        </Text>
        <Image source={require("../assets/expo.symbol.white.png")}/>
      </View>
        </Card>
        <Card title="Stride Symmetry">
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

export default Home;


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
