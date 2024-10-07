// Import dependencies
import React, {useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Background, Gap, Logo, Quicknews} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios, {isAxiosError} from 'axios';
import {AuthContext} from '../context/AuthContext';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function LoginScreen({navigation}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedSignUp, setIsExpandedSignUp] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const [secure, setSecure] = useState(true);
  const [secureReg, setSecureReg] = useState(true);

  const {setToken, setRefreshToken} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submitLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://sz0sw53s-3000.asse.devtunnels.ms/auth/login',
        {email: email, password: password},
      );
      await EncryptedStorage.setItem(
        'credentials',
        JSON.stringify({email, password}),
      );
      const accessToken = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
      setToken(accessToken);
      setRefreshToken(refreshToken);
      setLoading(false);
      navigation.replace('Main');
    } catch (error) {
      setLoading(false);
      if (isAxiosError(error)) {
        console.log(error.response.data);
      } else {
        console.log(error);
      }
      Alert.alert(
        'Gagal Login',
        'Silahkan cek kembali Koneksi Internet, Email, dan Passwordnya. atau Daftar.',
      );
    }
  };

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [loadingReg, setLoadingReg] = useState(false);

  const submitRegister = async () => {
    setLoadingReg(true);
    try {
      const response = await axios.post(
        'https://sz0sw53s-3000.asse.devtunnels.ms/auth/register',
        {email: regEmail, password: regPassword, name: regName},
      );
      // await EncryptedStorage.setItem(
      //   'credentials',
      //   JSON.stringify({regEmail, regPassword}),
      // );
      const response1 = await axios.post(
        'https://sz0sw53s-3000.asse.devtunnels.ms/auth/login',
        {email: regEmail, password: regPassword},
      );
      const accessToken = response1.data.accessToken;
      setToken(accessToken);
      setLoadingReg(false);
      // console.log(response.data);
      // console.log(response1.data.accessToken);
      navigation.replace('Main');
    } catch (error) {
      setLoadingReg(false);
      Alert.alert(
        'Gagal Register',
        'Silahkan Cek Kembali email dan password anda',
      );
    }
  };

  // Function to trigger the expand animation
  const handleSignInPress = () => {
    setIsExpanded(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  // Function to trigger the close animation
  const handleClosePress = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setIsExpanded(false); // Reset the state after the animation completes
    });
  }; // Function to trigger the expand animation

  const handleSignUpPress = () => {
    setIsExpandedSignUp(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  // Function to trigger the close animation
  const handleCloseSignUpPress = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setIsExpandedSignUp(false); // Reset the state after the animation completes
    });
  };

  const handleCloseSignInOpenSignUp = () => {
    handleClosePress(), handleSignUpPress();
  };

  const handleCloseSignUpOpenSignIn = () => {
    handleCloseSignUpPress(), handleSignInPress();
  };

  // Interpolating the animated values
  const backgroundHeight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '40%'], // Adjust as needed
  });

  const logoScale = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.7], // Adjust to control how much the logo should shrink
  });

  const opacityInputFields = animatedValue.interpolate({
    inputRange: [0, 2],
    outputRange: [0, 2], // Fade in/out effect
  });

  return (
    <View style={styles.container}>
      {/* Background Image with Animated Height */}
      <Animated.View
        style={[styles.backgroundContainer, {height: backgroundHeight}]}>
        <Background />

        {/* Logo with scaling animation */}
        <Animated.View
          style={[styles.logoContainer, {transform: [{scale: logoScale}]}]}>
          <Logo width={166} height={166} />
          <Gap height={10} />
          <Quicknews width={120} height={70} />
        </Animated.View>

        {/* Initial Sign In Button */}
        {!isExpanded && (
          <View style={styles.viewContainerBtn}>
            <TouchableOpacity
              style={styles.btnSignIn}
              onPress={handleSignInPress}
              activeOpacity={0.8}>
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            <Gap height={20} />
            <TouchableOpacity>
              <View style={styles.btnGoogleSignIn}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={require('../assets/search2.png')} />
                  <Gap width={10} />
                  <Text style={styles.textGoogleSignIn}>
                    Sign Up with Google
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <Gap height={10} />

            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'white'}}>Don't Have An Account?</Text>
              <Gap width={5} />
              <TouchableOpacity onPress={handleSignUpPress}>
                <Text style={{color: '#037FF3'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Animated.View>

      {/* Input Fields Sign In - will appear after animation */}
      {isExpanded && (
        <Animated.View
          style={[styles.inputContainer, {opacity: opacityInputFields}]}>
          <TouchableOpacity style={styles.exitBtn} onPress={handleClosePress}>
            <View style={styles.viewExitBtn}>
              <View style={styles.viewExitBtnLine} />
              {/* <Icon name={'minus'} color={'white'} size={40} /> */}
            </View>
          </TouchableOpacity>

          <Gap height={50} />

          <View style={styles.inputWrapper}>
            <Icon name={'gmail'} size={25} color={'#93949680'} />

            <Gap width={10} />

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#666"
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={email => setEmail(email)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Icon name={'lock'} size={25} color={'#93949680'} />

            <Gap width={10} />

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#666"
              secureTextEntry={secure}
              autoCapitalize="none"
              onChangeText={password => setPassword(password)}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Icon
                name={secure ? 'eye' : 'eye-off'}
                size={25}
                color={'#93949680'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.signInButtonExpanded}
            onPress={submitLogin}
            // onPress={() => navigation.navigate('Main')}
          >
            {loading ? (
              <ActivityIndicator color={'white'} size={'small'} />
            ) : (
              <Text style={styles.signInButtonText}>Sign In</Text>
            )}
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleCloseSignInOpenSignUp}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}

      {/* Input Fields Sign Up - will appear after animation */}
      {isExpandedSignUp && (
        <Animated.View
          style={[styles.inputContainer, {opacity: opacityInputFields}]}>
          <TouchableOpacity
            style={styles.exitBtn}
            onPress={handleCloseSignUpPress}>
            <View style={styles.viewExitBtn}>
              <View style={styles.viewExitBtnLine} />
              {/* <Icon name={'minus'} color={'white'} size={40} /> */}
            </View>
          </TouchableOpacity>

          <Gap height={50} />

          <View style={styles.inputWrapper}>
            <Icon name={'account'} size={25} color={'#93949680'} />

            <Gap width={10} />

            <TextInput
              style={styles.input}
              placeholder="Enter your Name"
              placeholderTextColor="#666"
              autoCapitalize="words"
              onChangeText={name => setRegName(name)}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Icon name={'gmail'} size={25} color={'#93949680'} />

            <Gap width={10} />

            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={email => setRegEmail(email)}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Icon name={'lock'} size={25} color={'#93949680'} />

            <Gap width={10} />

            <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              placeholderTextColor="#666"
              secureTextEntry={secureReg}
              autoCapitalize="none"
              onChangeText={password => setRegPassword(password)}
            />
            <TouchableOpacity onPress={() => setSecureReg(!secureReg)}>
              <Icon
                name={secure ? 'eye' : 'eye-off'}
                size={25}
                color={'#93949680'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.signInButtonExpanded}
            onPress={submitRegister}>
            {loadingReg ? (
              <ActivityIndicator size={'small'} color={'white'} />
            ) : (
              <Text style={styles.signInButtonText}>Create Account</Text>
            )}
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have and account? </Text>
            <TouchableOpacity onPress={handleCloseSignUpOpenSignIn}>
              <Text style={styles.signUpText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  viewExitBtnLine: {
    backgroundColor: 'white',
    width: 80,
    height: 5,
    borderRadius: 40,
    marginVertical: 20,
  },
  viewExitBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  exitBtn: {
    width: 100,
    height: 70,
    alignSelf: 'center',
  },
  textGoogleSignIn: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  btnGoogleSignIn: {
    width: 310,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  btnSignIn: {
    width: 320,
    height: 45,
    backgroundColor: '#F35F03',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 5,
  },
  viewContainerBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: 500,
  },
  container: {
    flex: 1,
    backgroundColor: '#272727',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // marginVertical: 20,
  },
  backgroundContainer: {
    width: '100%',
    overflow: 'hidden',
    zIndex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '80%',
    marginHorizontal: 20,
    // backgroundColor: '',
  },
  inputWrapper: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#fff',
  },
  signInButtonExpanded: {
    backgroundColor: '#f77e22',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#fff',
  },
  signUpText: {
    color: '#f77e22',
    fontWeight: 'bold',
  },
});
