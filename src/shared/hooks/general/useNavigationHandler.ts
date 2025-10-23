import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback } from 'react';

interface UseNavigationHandlerParams<T> {
  navigation: NativeStackNavigationProp<any>; //для выполнения самой навигации
  routeName: string; // указывает, куда переходить
  params: T; // параметры, которые передаются на целевой экран
  condition: boolean; //условие, разрешающее навигацию
}

export const useNavigationHandler = <T>({ navigation, routeName, params, condition }: UseNavigationHandlerParams<T>) => {
  return useCallback(() => {
    if (!condition) return;

    try {
      navigation.navigate(routeName, params);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }, [navigation, routeName, params, condition]);
};