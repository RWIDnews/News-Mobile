import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import {Gap} from '../components';

export default function FavoriteScreen({navigation}) {
  const news = [
    {
      id: 1,
      title: 'test title',
      image:
        'https://akudigital.com/bisnis-tips/wp-content/uploads/2020/04/portal-berita-719x400.jpg',
      content: 'deskripsinya',
      category: 1,
      source: 'Kompas.com',
    },
    {
      id: 2,
      title: 'test title2',
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV_rOSDbe5Xo96Dm1135cVWACxjMvwa_DzwnxwtUHktVC55B-w6wMsWuvlBhwPMKEouWtaKL22w53fLyBBe6E9GprOx59KXhNDnSiU0Di_-KnwvLSU3vL6UZlTbqzLILII7X9ROJhiQTEb/s1600/media-jurnalistik-online.jpg',
      content: 'deskripsinya2',
      category: 2,
      source: 'Kompas.com',
    },
    {
      id: 3,
      title: 'test title3',
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV_rOSDbe5Xo96Dm1135cVWACxjMvwa_DzwnxwtUHktVC55B-w6wMsWuvlBhwPMKEouWtaKL22w53fLyBBe6E9GprOx59KXhNDnSiU0Di_-KnwvLSU3vL6UZlTbqzLILII7X9ROJhiQTEb/s1600/media-jurnalistik-online.jpg',
      content: 'deskripsinya3',
      category: 3,
      source: 'Kompas.com',
    },
    {
      id: 4,
      title: 'test title4',
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV_rOSDbe5Xo96Dm1135cVWACxjMvwa_DzwnxwtUHktVC55B-w6wMsWuvlBhwPMKEouWtaKL22w53fLyBBe6E9GprOx59KXhNDnSiU0Di_-KnwvLSU3vL6UZlTbqzLILII7X9ROJhiQTEb/s1600/media-jurnalistik-online.jpg',
      content:
        'deskripsinya4 coba disia dij sini coba yang panjang gmna hasilnya ini',
      category: 4,
      source: 'Kompas.com',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        alignContent: 'center',
        marginVertical: 10,
        backgroundColor: '#1E1E1E',
        borderRadius: 20,
      }}>
      <View style={{flexDirection: 'row', margin: 20}}>
        <Image
          source={{uri: item.image}}
          style={{width: 80, height: 80, resizeMode: 'cover', borderRadius: 10}}
        />
        <View style={{marginHorizontal: 20, flex: 1}}>
          <Text style={{color: 'white', fontSize: 22, fontWeight: '600'}}>
            {item.title}
          </Text>
          <Gap height={10} />
          <Text style={{color: 'white', fontSize: 14, fontWeight: '400'}}>
            {item.content}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{backgroundColor: '#272727', flex: 1}}>
      <View style={{margin: 20}}>
        <Text style={{color: 'white', fontSize: 24}}>Saved News</Text>
        <Gap height={30} />
        <FlatList data={news} renderItem={renderItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
