import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './Bananas';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{flex: 1, backgroundColor: 'powderblue'}}>Open up App.js to start working on your app!</Text>
        <Text style={{flex: 2, backgroundColor: 'skyblue'}}>Changes you make will automatically reload.</Text>
        <Text style={{flex: 3, backgroundColor: 'steelblue'}}>Shake your phone to open the developer menu.</Text>
				<Text style={{flex: 4, backgroundColor: 'powderblue'}}>Olá mundo.</Text>
				<Bananas/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
