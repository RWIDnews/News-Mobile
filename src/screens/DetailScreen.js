import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '../components';

export default function DetailScreen({route, navigation}) {
  const news = route.params;

  const newsData = news.news;

  return (
    <View style={{backgroundColor: '#252525', flex: 1}}>
      <Image
        source={{uri: newsData.image}}
        style={{
          width: 420,
          height: 480,
          resizeMode: 'cover',
        }}
      />
      <View
        style={{
          height: 100,
          backgroundColor: '#252525',
          marginHorizontal: 40,
          marginVertical: -120,
          borderRadius: 10,
        }}>
        <View style={{margin: 10}}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
            {newsData.title}
          </Text>
          <Text style={{color: 'white', fontWeight: '400'}}>
            {newsData.content}
          </Text>
        </View>
      </View>
      <View style={{marginHorizontal: 40, marginVertical: 180}}>
        <View style={{margin: 10}}>
          <Text style={{color: 'white'}}>{newsData.source}</Text>
          <Gap height={20} />
          <Text style={{color: 'white'}}>{newsData.content}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
