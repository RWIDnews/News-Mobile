import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Background, Gap, Logo, Quicknews} from '../components';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function Google({navigation}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '314861733563-94dv2js3umt683fmgkd7skfokidclg3k.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    isSignedIn();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('due__', userInfo);
      setUser(userInfo);
    } catch (error) {
      console.log('message__', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('signin in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('play service not available');
      } else {
        console.log('some other error happened');
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo();
    } else {
      console.log('please login');
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('edit__', user);
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        Alert('user has not signed in yet');
        console.log('user has not signed in yet');
      } else {
        Alert('something went wrong');
        console.log('something went wrong');
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({});
    } catch (error) {
      console.log(error);
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleSignInPress = () => {
    setIsExpanded(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Background />
      <View style={{alignItems: 'center'}}>
        <Logo />
        <Gap height={20} />
        <Quicknews />

        <Gap height={100} />

        {/* btn sign in */}
        <TouchableOpacity onPress={handleSignInPress}>
          <View
            style={{
              width: 320,
              height: 45,
              backgroundColor: '#F35F03',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              elevation: 5,
            }}>
            <Text style={{fontSize: 15, fontWeight: '600', color: 'white'}}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>

        <Gap height={20} />

        {/* btn google sign in */}
        <TouchableOpacity onPress={signIn}>
          <View
            style={{
              width: 310,
              height: 45,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              elevation: 5,
              borderWidth: 1,
              borderColor: 'white',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/search2.png')} />
              <Gap width={10} />
              <Text style={{fontSize: 15, fontWeight: '600', color: 'white'}}>
                Sign Up with Google
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <Gap height={20} />

        {/* text sign up */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'white'}}>Don't Have An Account?</Text>
          <Gap width={5} />
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#037FF3'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
