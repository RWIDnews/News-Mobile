import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {Gap} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function ProfileScreen({navigation}) {
  const logout = async _id => {
    Alert.alert('Keluar?', 'Sesi anda akan berakhir', [
      {
        text: 'Keluar',
        onPress: async () => {
          try {
            await EncryptedStorage.removeItem('credentials');
            navigation.replace('Login');
          } catch (error) {
            navigation.replace('Login');
          }
        },
      },
      {
        text: 'Batal',
      },
    ]);
  };
  return (
    <View style={{backgroundColor: '#272727', flex: 1}}>
      {/* Background */}
      <Image
        source={require('../assets/BackgoundProfile.png')}
        style={{
          width: '100%',
          height: 500,
          resizeMode: 'cover',
          position: 'absolute',
        }}
      />

      {/* logOut Btn */}
      <TouchableOpacity
        onPress={() => logout()}
        style={{alignItems: 'flex-end', margin: 30}}>
        <View
          style={{backgroundColor: '#272727', padding: 8, borderRadius: 20}}>
          <Icon name={'exit-to-app'} color={'white'} size={30} />
        </View>
      </TouchableOpacity>

      {/* photoProfile */}
      <View style={{flex: 1, alignItems: 'center'}}>
        <Gap height={10} />
        <Image
          source={require('../assets/quickNewslogo.png')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            resizeMode: 'center',
            borderWidth: 2,
            borderColor: 'white',
          }}
        />

        <Gap height={20} />

        {/* name */}
        <Text style={{color: 'white', fontSize: 30, fontWeight: '600'}}>
          Nama User
        </Text>

        <Gap height={50} />

        {/* Stats */}
        <View
          style={{
            backgroundColor: '#272727',
            padding: 20,
            borderRadius: 20,
            flexDirection: 'row',
            width: 350,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{alignItems: 'center', flex: 1}}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
              1.252
            </Text>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
              News Read
            </Text>
          </View>
          <Gap width={10} />
          <View style={{width: 2, height: 50, backgroundColor: 'white'}} />
          <Gap width={10} />
          <View style={{alignItems: 'center', flex: 1}}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
              120
            </Text>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
              News Saved
            </Text>
          </View>
          <Gap width={10} />
          <View style={{width: 2, height: 50, backgroundColor: 'white'}} />
          <Gap width={10} />
          <View style={{alignItems: 'center', flex: 1}}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
              1.565
            </Text>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
              Apa aja
            </Text>
          </View>
        </View>

        <Gap height={60} />

        {/* btn Edit profile */}
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#1A1A1A',
              flexDirection: 'row',
              alignItems: 'center',
              width: 320,
              height: 60,
              borderRadius: 10,
              paddingHorizontal: 20,
            }}>
            <Icon name={'account-edit'} size={45} color={'white'} />
            <Gap width={20} />
            <Text style={{color: 'white', fontSize: 16}}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <Gap height={20} />

        {/* btn contact */}
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#1A1A1A',
              flexDirection: 'row',
              alignItems: 'center',
              width: 320,
              height: 60,
              borderRadius: 10,
              paddingHorizontal: 20,
            }}>
            <Icon name={'contacts'} size={45} color={'white'} />
            <Gap width={20} />
            <Text style={{color: 'white', fontSize: 16}}>Contacts</Text>
          </View>
        </TouchableOpacity>
        <Gap height={20} />

        {/* btn  history */}
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#1A1A1A',
              flexDirection: 'row',
              alignItems: 'center',
              width: 320,
              height: 60,
              borderRadius: 10,
              paddingHorizontal: 20,
            }}>
            <Icon name={'history'} size={45} color={'white'} />
            <Gap width={20} />
            <Text style={{color: 'white', fontSize: 16}}>History</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
