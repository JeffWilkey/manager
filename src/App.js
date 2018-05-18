import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD82strjf_pUt36LGIY_-vxai_qxrJ0U6s',
      authDomain: 'manager-c73eb.firebaseapp.com',
      databaseURL: 'https://manager-c73eb.firebaseio.com',
      projectId: 'manager-c73eb',
      storageBucket: 'manager-c73eb.appspot.com',
      messagingSenderId: '578256335061'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;