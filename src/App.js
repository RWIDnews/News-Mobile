import {NavigationContainer} from '@react-navigation/native';
import Navigator from './route';
import {AuthProvider} from './context/AuthContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView>
      <AuthProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
