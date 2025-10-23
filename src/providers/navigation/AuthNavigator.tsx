import { createStackNavigator } from '@react-navigation/stack';
//import CreateAccScreen from '@screens/auth/CreateAccScreen';
import LoginScreen from '@screens/auth/LoginScreen';
import PhoneAuthScreen from '@screens/auth/PhoneAuthScreen/PhoneAuthScreen';
//import PhoneRegistrationScreen from '@screens/auth/PhoneRegistrationScreen';
//import VerificationScreen from '@screens/auth/VerificationScreen';
import React from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{ 
        headerShown: false,
        cardStyle: { backgroundColor: 'white' }
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PhoneAuth" component={PhoneAuthScreen} />
    </Stack.Navigator>
  );
}

