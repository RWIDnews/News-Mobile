import {Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Logo() {
  return (
    <Image
      source={require('../assets/background.png')}
      style={{
        width: 166,
        height: 166,
        borderRadius: 166 / 1,
        borderWidth: 2,
        borderColor: 'white',
      }}
    />
  );
}

const styles = StyleSheet.create({});
