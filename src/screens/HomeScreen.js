import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Gap, Quicknews} from '../components';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';

export default function HomeScreen({navigation}) {
  const {token, refreshToken} = useContext(AuthContext);
  const [newsTest, setNewsTest] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get(
        'https://sz0sw53s-3000.asse.devtunnels.ms/news',
        {
          refreshToken: refreshToken,
          headers: {Authorization: `Bearer ${token}`},
        },
      );
      setNewsTest(response.data.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log(newsTest);

  const data = [
    'News',
    'Edukasi',
    'Finance',
    'Inet',
    'Hot',
    'Sport',
    'Bola',
    'Oto',
    'Properti',
    'Travel',
    'Food',
    'Health',
    'Wolipop',
    'X',
    'Foto',
    'Hikmah',
    'Pop',
  ];
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
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {news: item})}
      style={{width: '80%'}}>
      <View style={styles.viewBottomNews}>
        <Image source={{uri: item.image}} style={styles.imageBottomNews} />
        <View style={styles.viewTextBottomNews}>
          <Text style={styles.textBottomNews}>{item.title}</Text>
          <Text style={{color: 'white'}}>{item.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItemViral = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsViral', {newsTrending: item})}>
      <View style={styles.viewTrendingNews}>
        <Image source={{uri: item.imageUrl}} style={styles.imageTrending} />
        <View style={styles.viewContainerTitleViral}>
          <View style={styles.viewTextTitleViral}>
            <Text style={styles.textTitleViral}>{item.title}</Text>
            <Gap height={5} />
            <Text style={styles.textTitleDecs}>{item.shortDesc}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View>
      {/* header adn notification */}
      <View style={styles.viewHeader}>
        <Quicknews width={75} height={35} />
        <TouchableOpacity>
          <Icon name={'bell-outline'} color={'white'} size={30} />
        </TouchableOpacity>
      </View>

      {/* flatlist berita viral*/}
      <FlatList
        horizontal
        data={newsTest}
        renderItem={renderItemViral}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />

      <Gap height={20} />

      {/* scrolview categori */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          {data.map((item, index) => (
            <TouchableOpacity key={index}>
              <View style={styles.viewCategoryContainer}>
                <View>
                  <Text style={styles.textCategory}>{item}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );

  return (
    <View style={{backgroundColor: '#252525', flex: 1}}>
      {/* flatlist berita bawah */}
      <View>
        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled
          data={news}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={renderHeader}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textCategory: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  viewCategoryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: 'white',
    width: 80,
    height: 30,
    borderRadius: 20,
  },
  viewHeader: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  textTitleDecs: {
    color: 'white',
    fontWeight: '400',
  },
  textTitleViral: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewTextTitleViral: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  viewContainerTitleViral: {
    width: 300,
    height: 100,
    backgroundColor: '#00000099',
    bottom: 70,
    borderRadius: 10,
    marginBottom: -70,
  },
  imageTrending: {
    width: 320,
    height: 330,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  viewTrendingNews: {marginHorizontal: 15},
  textBottomNews: {
    color: 'white',
    fontSize: 20,
    bottom: 30,
  },
  viewTextBottomNews: {
    marginHorizontal: 20,
    maxWidth: 250,
  },
  imageBottomNews: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginVertical: 5,
    borderRadius: 10,
  },
  viewBottomNews: {
    margin: 20,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
});
