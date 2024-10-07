import {Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Logo({width, height}) {
  return (
    <Image
      source={require('../assets/quickNewslogo.png')}
      style={{
        width: width,
        height: height,
        borderRadius: height / 2,
        borderWidth: 2,
        borderColor: 'white',
      }}
    />
  );
}

const styles = StyleSheet.create({});
