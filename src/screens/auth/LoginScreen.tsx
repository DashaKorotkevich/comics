import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {NavigationProp} from '@navigation/types'

const LoginScreen = () => {
  // const navigation = useNavigation<NavigationProp>();

  // const handlePhoneLogin = () => {
  //   navigation.navigate('PhoneAuth');
  // };

  // const handleOAuthLogin = (provider: 'vk' | 'yandex') => {
  //   console.log(`Login with ${provider}`);
  //   // Здесь будет логика OAuth
  // };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Выберите способ входа:</Text>
      

    </View>
  );
};

export default LoginScreen;