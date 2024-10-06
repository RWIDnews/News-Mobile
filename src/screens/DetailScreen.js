import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
          position: 'absolute',
        }}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View
          style={{
            margin: 20,
            backgroundColor: '#00000080',
            width: 40,
            height: 40,
            borderRadius: 20,
          }}>
          <Icon name={'chevron-left'} size={40} color={'white'} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: 100,
          backgroundColor: '#252525',
          marginHorizontal: 40,
          marginTop: 280,
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
      <View style={{marginTop: 60, marginHorizontal: 40}}>
        <Text style={{color: 'white'}}>{newsData.source}</Text>
        <Gap height={20} />
        <Text style={{color: 'white'}}>{newsData.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
