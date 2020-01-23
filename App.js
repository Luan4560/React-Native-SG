import React, {Component} from 'react';
import api from './src/services/api';
import base64 from 'react-native-base64';

import {View, Text, StyleSheet, Button, Alert} from 'react-native';

export default class App extends Component {
  state = {
    value: [],
  };

  componentDidMount = async () => {
    try {
      await api.get('/teste').then(res => {
        console.log(res);
        const value = res.status;
        this.setState(value);
      });
    } catch (err) {
      return 'err';
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Sg System | ERP</Text>
        <Button
          title="Acessar"
          color="#ccc"
          onPress={() => Alert.alert('Button Clicked')}
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
