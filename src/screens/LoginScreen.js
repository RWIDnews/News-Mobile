// Import dependencies
import React, {useState, useRef, version} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import {Background, Gap, Logo, Quicknews} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen({navigation}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedSignUp, setIsExpandedSignUp] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const [secure, setSecure] = useState(false);

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
          <Logo />
          <Gap height={10} />
          <Quicknews width={155} height={85} />
        </Animated.View>

        {/* Initial Sign In Button */}
        {!isExpanded && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              top: 500,
            }}>
            <TouchableOpacity
              style={{
                width: 320,
                height: 45,
                backgroundColor: '#F35F03',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                elevation: 5,
              }}
              onPress={handleSignInPress}
              activeOpacity={0.8}>
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            <Gap height={20} />
            <TouchableOpacity>
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
                  <Text
                    style={{fontSize: 15, fontWeight: '600', color: 'white'}}>
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
          <TouchableOpacity
            style={{
              width: 100,
              height: 70,
              alignSelf: 'center',
            }}
            onPress={handleClosePress}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 80,
                  height: 5,
                  borderRadius: 40,
                  marginVertical: 20,
                }}
              />
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
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.signInButtonText}>Sign In</Text>
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
            style={{
              width: 100,
              height: 70,
              alignSelf: 'center',
            }}
            onPress={handleCloseSignUpPress}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 80,
                  height: 5,
                  borderRadius: 40,
                  marginVertical: 20,
                }}
              />
              {/* <Icon name={'minus'} color={'white'} size={40} /> */}
            </View>
          </TouchableOpacity>

          <Gap height={50} />

          <View style={styles.inputWrapper}>
            <Icon name={'account'} size={25} color={'#93949680'} />

            <Gap width={10} />

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#666"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Icon name={'gmail'} size={25} color={'#93949680'} />

            <Gap width={10} />

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#666"
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
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Icon
                name={secure ? 'eye' : 'eye-off'}
                size={25}
                color={'#93949680'}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.signInButtonExpanded}>
            <Text style={styles.signInButtonText}>Create Account</Text>
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
