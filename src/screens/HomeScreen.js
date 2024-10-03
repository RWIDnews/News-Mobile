// import {
//   FlatList,
//   Image,
//   Modal,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Gap from '../components';

// export default function HomeScreen({navigation}) {
//   const [modalVisible, setModalVisible] = useState(false);
//   const closeModal = setModalVisible(false);
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const news = [
//   {
//     id: 1,
//     title: 'test title',
//     image:
//       'https://akudigital.com/bisnis-tips/wp-content/uploads/2020/04/portal-berita-719x400.jpg',
//     content: 'deskripsinya',
//     category: 1,
//   },
//   {
//     id: 2,
//     title: 'test title2',
//     image:
//       'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV_rOSDbe5Xo96Dm1135cVWACxjMvwa_DzwnxwtUHktVC55B-w6wMsWuvlBhwPMKEouWtaKL22w53fLyBBe6E9GprOx59KXhNDnSiU0Di_-KnwvLSU3vL6UZlTbqzLILII7X9ROJhiQTEb/s1600/media-jurnalistik-online.jpg',
//     content: 'deskripsinya2',
//     category: 2,
//   },
//   {
//     id: 3,
//     title: 'test title3',
//     image:
//       'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV_rOSDbe5Xo96Dm1135cVWACxjMvwa_DzwnxwtUHktVC55B-w6wMsWuvlBhwPMKEouWtaKL22w53fLyBBe6E9GprOx59KXhNDnSiU0Di_-KnwvLSU3vL6UZlTbqzLILII7X9ROJhiQTEb/s1600/media-jurnalistik-online.jpg',
//     content: 'deskripsinya3',
//     category: 3,
//   },
//   {
//     id: 4,
//     title: 'test title4',
//     image:
//       'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiV_rOSDbe5Xo96Dm1135cVWACxjMvwa_DzwnxwtUHktVC55B-w6wMsWuvlBhwPMKEouWtaKL22w53fLyBBe6E9GprOx59KXhNDnSiU0Di_-KnwvLSU3vL6UZlTbqzLILII7X9ROJhiQTEb/s1600/media-jurnalistik-online.jpg',
//     content: 'deskripsinya4',
//     category: 4,
//   },
// ];

// const renderItem = ({item}) => (
//   <View style={{margin: 20, alignItems: 'center'}}>
//     <Image
//       source={{uri: item.image}}
//       style={{
//         width: '100%',
//         height: 210,
//         resizeMode: 'cover',
//         marginVertical: 5,
//       }}
//     />
//     <Text>{item.title}</Text>
//     <Text>{item.content}</Text>
//   </View>
// );

//   return (
//     <View>
//       <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
//         <TouchableOpacity onPress={() => setModalVisible(true)}>
//           <Icon name={'menu'} color={'black'} size={20} />
//         </TouchableOpacity>

//         <Gap width={20} />

//         <Text
//           style={{color: 'black', fontWeight: '600', flex: 1, fontSize: 20}}>
//           Hi, UserName
//         </Text>
//         <TouchableOpacity>
//           <Icon name={'bell-outline'} color={'black'} size={20} />
//         </TouchableOpacity>
//       </View>

//       <Gap height={10} />

//       <View>
//         <ScrollView horizontal>
//           <View style={{flexDirection: 'row'}}>
//             {data.map((item, index) => (
//               <TouchableOpacity key={index}>
//                 <View
//                   style={{
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginHorizontal: 10,
//                     backgroundColor: 'dodgerblue',
//                     width: 80,
//                     height: 30,
//                     borderRadius: 20,
//                   }}>
//                   <View>
//                     <Text
//                       style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
//                       {item}
//                     </Text>
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>
//       </View>

//       <Gap height={20} />

// <FlatList
//   ListFooterComponent={<Gap height={150} />}
//   data={news}
//   renderItem={renderItem}
//   keyExtractor={item => item.id.toString()}
// />

//       <Modal
//         transparent
//         visible={modalVisible}
//         onRequestClose={closeModal}
//         animationType="fade">
//         <View style={{backgroundColor: 'white', flex: 1, width: '90%'}}>
//           <Text>hallo</Text>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

/* <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
          <BlurView
            blurAmount={20}
            blurType="prominent"
            style={{
              padding: 15,
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              // position: 'absolute',
              // bottom: -30,
              // width: '100%',
              // padding: 15,
              // backgroundColor: 'rgba(0, 0, 0, 0.3)',
              // width: 300,
              // height: 100,
              // borderRadius: 10,
            }}>
            <Text style={{color: 'white'}}>hallo</Text>
          </BlurView>
        </View> */

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
import {Gap, Quicknews} from '../components';
import {BlurView} from '@react-native-community/blur';

export default function HomeScreen({navigation}) {
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
      <View
        style={{
          margin: 20,
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            marginVertical: 5,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            marginHorizontal: 20,
            maxWidth: 250,
          }}>
          <Text style={{color: 'white', fontSize: 20, bottom: 30}}>
            {item.title}
          </Text>
          <Text style={{color: 'white'}}>{item.content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItemViral = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsViral', {newsTrending: item})}>
      <View style={{marginHorizontal: 15}}>
        <Image
          source={{uri: item.image}}
          style={{
            width: 320,
            height: 330,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
        <View
          style={{
            width: 300,
            height: 100,
            backgroundColor: '#00000099',
            bottom: 70,
            borderRadius: 10,
            marginBottom: -70,
          }}>
          <View style={{marginHorizontal: 20, marginVertical: 10}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              {item.title}
            </Text>
            <Text style={{color: 'white', fontWeight: '400'}}>
              {item.content}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor: '#252525', flex: 1}}>
      <ScrollView>
        <View
          style={{
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Quicknews width={100} height={55} />
          <TouchableOpacity>
            <Icon name={'bell-outline'} color={'white'} size={50} />
          </TouchableOpacity>
        </View>

        {/* flatlist top news */}
        <View>
          <FlatList
            horizontal
            data={newsTrending}
            renderItem={renderItemViral}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        <Gap height={20} />

        {/* scrolview categori */}
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
                      backgroundColor: 'white',
                      width: 80,
                      height: 30,
                      borderRadius: 20,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '500',
                          color: 'black',
                        }}>
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

        {/* flatlist berita bawah */}
        <View>
          <FlatList
            scrollEnabled
            showsVerticalScrollIndicator
            // ListFooterComponent={<Gap height={150} />}
            data={news}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <Text>HomeScreen</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
