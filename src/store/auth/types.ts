export interface User {
  id: string;
  name: string | null;
  avatar: string | null;
}

export type AuthApproach = 'phone' | 'oauth' | null;

export interface AuthState {
  approach: AuthApproach;

  phoneNumber: string | null;

  oauthProvider: 'vk' | 'yandex' | null;
    oauthCode: string | null, 

  isVerified: boolean;
  isUserRegistered: boolean;
  verificationToken: string | null,

  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface PhoneVerificationPayload {
  phoneNumber: string;
  token: string;
}

