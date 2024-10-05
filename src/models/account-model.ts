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
