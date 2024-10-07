import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Gap} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';

export default function DetailScreenViral({route, navigation}) {
  const news = route.params;

  const newsData = news.newsTrending;

  console.log(newsData);

  return (
    <View style={{backgroundColor: '#252525', flex: 1}}>
      <Image
        source={{uri: newsData.imageUrl}}
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
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
            {newsData.title}
          </Text>
          <Text style={{color: 'white', fontWeight: '400'}}>
            {newsData.shortDesc}
          </Text>
        </View>
      </View>
      <Gap height={40} />
      <ScrollView>
        <View style={{marginHorizontal: 40, flex: 1}}>
          <Text style={{color: 'white'}}>{newsData.publishedAt}</Text>
          <Gap height={20} />
          <Text style={{color: 'white'}}>{newsData.description}</Text>
          <Gap height={40} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
