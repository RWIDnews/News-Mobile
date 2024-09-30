import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '../components';

export default function HomeScreen({navigation}) {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const news = [
    {
      id: 1,
      title: 'test title',
      image:
        'https://akudigital.com/bisnis-tips/wp-content/uploads/2020/04/portal-berita-719x400.jpg',
      content: 'deskripsinya',
      category: 1,
    },
    {
      id: 2,
      title: 'test title2',
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV_rOSDbe5Xo96Dm1135cVWACxjMvwa_DzwnxwtUHktVC55B-w6wMsWuvlBhwPMKEouWtaKL22w53fLyBBe6E9GprOx59KXhNDnSiU0Di_-KnwvLSU3vL6UZlTbqzLILII7X9ROJhiQTEb/s1600/media-jurnalistik-online.jpg',
      content: 'deskripsinya2',
      category: 2,
    },
    {
      id: 3,
      title: 'test title3',
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV_rOSDbe5Xo96Dm1135cVWACxjMvwa_DzwnxwtUHktVC55B-w6wMsWuvlBhwPMKEouWtaKL22w53fLyBBe6E9GprOx59KXhNDnSiU0Di_-KnwvLSU3vL6UZlTbqzLILII7X9ROJhiQTEb/s1600/media-jurnalistik-online.jpg',
      content: 'deskripsinya3',
      category: 3,
    },
    {
      id: 4,
      title: 'test title4',
      image:
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV_rOSDbe5Xo96Dm1135cVWACxjMvwa_DzwnxwtUHktVC55B-w6wMsWuvlBhwPMKEouWtaKL22w53fLyBBe6E9GprOx59KXhNDnSiU0Di_-KnwvLSU3vL6UZlTbqzLILII7X9ROJhiQTEb/s1600/media-jurnalistik-online.jpg',
      content: 'deskripsinya4',
      category: 4,
    },
  ];

  const renderItem = ({item}) => (
    <View style={{margin: 20, alignItems: 'center'}}>
      <Image
        source={{uri: item.image}}
        style={{
          width: '100%',
          height: 210,
          resizeMode: 'cover',
          marginVertical: 5,
        }}
      />
      <Text>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  );
  return (
    <View>
      <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
        <TouchableOpacity>
          <Icon name={'menu'} color={'black'} size={20} />
        </TouchableOpacity>

        <Gap width={20} />

        <Text
          style={{color: 'black', fontWeight: '600', flex: 1, fontSize: 20}}>
          Hi, UserName
        </Text>
        <TouchableOpacity>
          <Icon name={'bell-outline'} color={'black'} size={20} />
        </TouchableOpacity>
      </View>

      <Gap height={10} />

      <View>
        <ScrollView horizontal>
          <View style={{flexDirection: 'row'}}>
            {data.map((item, index) => (
              <TouchableOpacity key={index}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 10,
                    backgroundColor: 'dodgerblue',
                    width: 80,
                    height: 30,
                    borderRadius: 20,
                  }}>
                  <View>
                    <Text
                      style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
                      {item}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <Gap height={20} />

      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
