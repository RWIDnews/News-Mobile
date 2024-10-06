import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import DetailScreenViral from '../screens/DetailScreenViral';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/FavoriteScreen';
import TrendingScreen from '../screens/TrendingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for the details screens
function DetailStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="DetailsViral" component={DetailScreenViral} />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator including the Stack Navigator for the details
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Popular') {
            iconName = focused ? 'fire' : 'fire';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#808080',
        tabBarStyle: {
          paddingHorizontal: 20,
          backgroundColor: '#2C2C2C',
          height: 50,
          paddingBottom: 0,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
      })}>
      {/* Tab for Home and its detail pages */}
      <Tab.Screen name="HomeStack" component={DetailStackNavigator} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Popular" component={TrendingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// Root Stack Navigator
export default function Navigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash Screen" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* Load Bottom Tab Navigator which contains the stack navigator */}
      <Stack.Screen name="Main" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
