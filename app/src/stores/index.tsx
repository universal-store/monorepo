/** @format */

import React, { Component, createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextInterface {
  token: string;
  removeToken: () => Promise<void>;
  saveToken: (token: string) => Promise<void>;
  getToken: () => Promise<string | null | undefined>;
}

export const AuthContext = createContext<AuthContextInterface | null>(null);

export default class AuthProvider extends Component {
  state = {
    token: '',
    saveToken: async (token: string) => {
      try {
        return await AsyncStorage.setItem('userToken', token);
      } catch (error) {
        this.setState({ error });
      }
    },
    removeToken: async () => {
      try {
        return await AsyncStorage.removeItem('userToken');
      } catch (error) {
        this.setState({ error });
      }
    },
    getToken: async () => {
      try {
        return await AsyncStorage.getItem('userToken');
      } catch (error) {
        this.setState({ error });
      }
    },
  };

  componentWillMount() {
    AsyncStorage.getItem('userToken')
      .then(token => {
        this.setState({ token });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    return <AuthContext.Provider value={this.state}>{this.props.children}</AuthContext.Provider>;
  }
}
