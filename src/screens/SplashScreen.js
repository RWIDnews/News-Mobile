import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SplashScreen({navigation}) {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Text>SplashScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
