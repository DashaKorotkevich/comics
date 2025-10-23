import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthApproach, AuthState, User } from './types';

const initialState: AuthState = {
  approach: null,

  phoneNumber: null,

  oauthProvider: null,
  oauthCode: null, 

  isVerified: false, 
  isUserRegistered: false,
  verificationToken: null,

  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Выбор подхода
    setAuthApproach: (state, action: PayloadAction<AuthApproach>) => {
      state.approach = action.payload;
      state.error = null;
    },

    // 🔢 Сохранение номера телефона
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
      state.isVerified = false;
      state.verificationToken = null;
    },

    // 🔑 Сохранение OAuth провайдера
    setOauthProvider: (state, action: PayloadAction<'vk' | 'yandex'>) => {
      state.oauthProvider = action.payload;
      state.isVerified = false;
      state.verificationToken = null;
      state.oauthCode = null;  // Сбрасываем предыдущий code
    },

    // 🔐 Сохранение OAuth code (новый редьюсер!)
    setOauthCode: (state, action: PayloadAction<string>) => {
      state.oauthCode = action.payload;
      state.loading = true;    // Начинаем процесс верификации
    },

    // ✅ Универсальная успешная верификация 
    setVerificationSuccess: (state, action: PayloadAction<{ token: string }>) => {
      state.verificationToken = action.payload.token;
      state.isVerified = true;
      state.loading = false;
      state.error = null;
    },

    // 📋 Получение статуса регистрации
    setRegistrationStatus: (state, action: PayloadAction<boolean>) => {
      state.isUserRegistered = action.payload;
      state.loading = false;
    },

    // 🟠 Начало аутентификации (универсальное)
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    // 👤 Успешное создание/логин пользователя
    authSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      // После успешного логина пользователь зарегистрирован
      state.isUserRegistered = true;
    },

    // ❌ Ошибка аутентификации
    authFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // 🧹 Очистка ошибки
    clearError: (state) => {
      state.error = null;
    },

    // 🚪 Выход из системы
    logout: (state) => {
      state.approach = null;
      state.phoneNumber = null;
      state.oauthProvider = null;
      state.verificationToken = null;
      state.isVerified = false;
      state.isUserRegistered = false;
      state.user = null;
      state.loading = false;
      state.error = null;
      state.oauthCode = null;
    },

    // ✏️ Обновление профиля пользователя
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const {
  setAuthApproach,
  setPhoneNumber,
  setOauthProvider,
  setVerificationSuccess,
  setRegistrationStatus,
  setOauthCode,
  authStart,
  authSuccess,
  authFailure,
  clearError,
  logout,
  updateProfile,
} = authSlice.actions;

export default authSlice.reducer;