import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeModules } from 'react-native'
var Toast  =  NativeModules.YoutubeModule;
export default class App extends React.Component {
  handle(){
    console.log("khbk");
    Toast.ShowToast("chup kr be")
  }
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.handle.bind(this)}>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
