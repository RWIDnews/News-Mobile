import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Background, Logo} from '../components';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';

export default function SplashScreen({navigation}) {
  const {setToken, setRefreshToken} = useContext(AuthContext);

  async function refreshToken() {
    try {
      const credential = await EncryptedStorage.getItem('credentials');
      if (credential) {
        const response = await axios.post(
          'https://sz0sw53s-3000.asse.devtunnels.ms/auth/login',
          JSON.parse(credential),
        );
        const token = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        setToken(token);
        setRefreshToken(refreshToken);
        setTimeout(() => {
          navigation.replace('Main');
        }, 2000);
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 2000);
      }
    } catch (error) {
      setTimeout(() => {
        navigation.replace('Login');
      }, 2000);
    }
  }

  useEffect(() => {
    refreshToken();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Background />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Logo width={166} height={166} />
        {/* <Button title="Login" onPress={() => navigation.replace('Login')} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
