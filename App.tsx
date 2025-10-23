import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>NavigationContainer works! 🧭</Text>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
