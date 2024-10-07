import {Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Quicknews({width, height}) {
  return (
    <Image
      source={require('../assets/Quicknews.png')}
      style={{width: width, height: height, resizeMode: 'contain'}}
    />
  );
}

const styles = StyleSheet.create({});
