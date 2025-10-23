import { useAppSelector } from "@hooks/general/redux";
//этот хук нужен для навигации, какие экраны доступны, а какие нет

export const useAuth = () => {
  const auth = useAppSelector((state) => state.auth);

// Вычисляемые поля для навигации
  const canAccessVerification = !!auth.phoneNumber || !!auth.oauthCode; //Конструкция !! (двойное отрицание) преобразует любое значение в строгий булев тип (true или false).
  const canAccessCreateAcc = auth.isVerified && !auth.isUserRegistered;
  const canAccessApp = auth.isVerified && auth.isUserRegistered && auth.user?.name && auth.user?.avatar;

  return {
    canAccessVerification,
    canAccessCreateAcc, 
    canAccessApp,
  };
};