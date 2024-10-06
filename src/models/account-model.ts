export type TSendTokenForResetPasswordDto = {
  email: string;
};

export type TResetPasswordDto = {
  password: string;
  token: string;
};

export type TResetPasswordModel = {
  success: boolean;
  message: string;
};

export type TLoginDto = {
  email: string;
  password: string;
};

export type TSignUpDto = {
  name: string;
  email: string;
  password: string;
};

export type TSignUpModel = TSignInModel & {
  user: {
    name: string;
    email: string;
  };
};

export type TSignInModel = {
  success: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  message: string | null;
};
