import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Gap} from '../components';
import {FlatList} from 'react-native-gesture-handler';

export default function TrendingScreen() {
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

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const newsTrending = [
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
    <TouchableOpacity>
      <View style={{marginHorizontal: 20}}>
        <Image
          source={{uri: item.image}}
          style={{
            height: 350,
            width: 320,
            resizeMode: 'cover',
            borderRadius: 20,
            // marginRight: 25,
          }}
        />
        <View
          style={{
            backgroundColor: '#000000c4',
            width: 280,
            marginTop: -70,
            height: 100,
            marginVertical: 20,
            padding: 10,
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
            {item.title}
          </Text>
          <Gap height={10} />
          <Text style={{color: 'white', fontSize: 12}}>{item.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItemTrending = ({item}) => (
    <TouchableOpacity style={{marginHorizontal: 20}}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 102,
            height: 96,
            borderRadius: 16,
            resizeMode: 'cover',
          }}
        />
        <View style={{marginHorizontal: 10, flex: 1}}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
            {item.title}
          </Text>
          <Gap height={10} />
          <Text style={{color: 'white', fontSize: 12}}>{item.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={{margin: 20}}>
      <View
        style={{
          backgroundColor: '#3B3B3B',
          borderRadius: 20,
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Gap width={5} />
          <Icon name={'magnify'} size={24} color={'#ffffff66'} />
          <Gap width={10} />
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => setIsSearchActive(true)}>
            <Text style={{color: '#ffffff66'}}>Search your News</Text>
          </TouchableOpacity>
          {/* <TextInput
            placeholderTextColor={'#ffffff66'}
            placeholder="Search your News"
            style={{flex: 1, color: 'white'}}
          /> */}
        </View>
      </View>
      <Gap height={10} />

      <Text style={{color: 'white', fontSize: 24, fontWeight: '600'}}>
        Hot News Today
      </Text>
      <Gap height={10} />
      <FlatList
        data={newsTrending}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={{color: 'white', fontSize: 24, fontWeight: '600'}}>
        Other Hot News Today
      </Text>
    </View>
  );

  const renderSearchView = () => (
    <View style={{flex: 1, backgroundColor: '#272727', padding: 20}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => setIsSearchActive(false)}>
          <Icon name="arrow-left" size={24} color="#ffffff66" />
        </TouchableOpacity>
        <Gap width={10} />
        <TextInput
          placeholder="Search your News"
          style={{
            flex: 1,
            backgroundColor: '#3B3B3B',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            color: 'white',
          }}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#ffffff66"
        />
      </View>
      <Gap height={20} />
      {/* Dummy Categories */}
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {['Korupsi', 'AI', 'Perang', 'Ekonomi', 'Kasus', 'PBB'].map(
          (item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#3B3B3B',
                padding: 10,
                margin: 5,
                borderRadius: 20,
              }}>
              <Text style={{color: 'white'}}>{item}</Text>
            </View>
          ),
        )}
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      {isSearchActive ? (
        renderSearchView()
      ) : (
        <View style={{backgroundColor: '#272727', flex: 1}}>
          <FlatList
            ListHeaderComponent={renderHeader}
            scrollEnabled
            data={newsTrending}
            renderItem={renderItemTrending}
            keyExtractor={item => item.id.toString()}
          />
          {/* </View> */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
