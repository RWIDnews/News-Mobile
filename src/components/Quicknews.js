import {Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Quicknews({width, height}) {
  return (
    <Image
      source={require('../assets/Quicknews.png')}
      style={{width: width, height: height}}
    />
  );
}

const styles = StyleSheet.create({});
