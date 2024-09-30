import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Gap from '../components';
import CheckBox from '@react-native-community/checkbox';

export default function LoginScreen({navigation}) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          margin: 20,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Text>LOGO HERE</Text>
        <Gap height={50} />
        <TextInput
          style={{borderBottomColor: 'black', borderBottomWidth: 1}}
          placeholder="Email"
          placeholderTextColor={'grey'}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Gap height={20} />

        <TextInput
          style={{borderBottomColor: 'black', borderBottomWidth: 1}}
          placeholder="Password"
          placeholderTextColor={'grey'}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Gap height={20} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <CheckBox
            onValueChange={() => setRememberMe(!rememberMe)}
            value={rememberMe}
            tintColor={{true: 'white', false: 'white'}}
          />
          <Text
            onPress={() => setRememberMe(!rememberMe)}
            style={{color: 'black', fontSize: 12}}>
            Remember Me
          </Text>
        </View>

        <Gap height={20} />

        <TouchableOpacity
          style={{justifyContent: 'center', alignSelf: 'center'}}
          onPress={() => navigation.navigate('Home')}>
          <View
            style={{
              backgroundColor: 'aqua',
              padding: 10,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={{color: 'black', fontWeight: '600'}}>Sign In</Text>
          </View>
        </TouchableOpacity>

        <Gap height={20} />

        <TouchableOpacity
          style={{justifyContent: 'center', alignSelf: 'center'}}
          onPress={() => navigation.navigate('Register')}>
          <View
            style={{
              backgroundColor: 'tomato',
              padding: 10,
              width: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={{color: 'black', fontWeight: '600'}}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
