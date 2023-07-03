export interface LoginUserData {
  email: string;
  password: string;
}

export interface RegisterUserData extends LoginUserData {
  username: string;
  confirmPassword?: string;
  acceptTerms?: boolean | undefined;
}
