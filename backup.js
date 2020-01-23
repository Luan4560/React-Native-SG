import React, {Component} from 'react';

import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

export default class App extends Component {
  render() {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Sg System | ERP</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  textTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'sans serif',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
