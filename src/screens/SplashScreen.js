import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Background} from '../components';

export default function SplashScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Background />
      <Button title="Login" onPress={() => navigation.replace('Login')} />
      <Text style={{color: 'white'}}>SplashScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
