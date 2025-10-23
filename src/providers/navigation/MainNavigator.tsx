import { useAuth } from '@hooks/auth';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import LoginScreen from '@screens/auth/LoginScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
  //const { canAccessApp } = useAuth();
  return (
    // <Stack.Navigator screenOptions={{ headerShown: false }}>
    //   {hasAccess ? (
    //     <Stack.Screen name="App" component={AppNavigator} />
    //   ) : (
    //     <Stack.Screen name="Auth" component={AuthNavigator} />
    //   )}
    // </Stack.Navigator>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Test" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
};