import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Типы для AuthNavigator
export type AuthStackParamList = {
  Login: undefined;
  PhoneAuth: undefined;
};

// Типы для MainNavigator  
export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
};

// Объединяющий тип для useNavigation
export type RootStackParamList = AuthStackParamList & MainStackParamList;

// Общий тип для навигации
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;