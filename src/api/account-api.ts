import {
  TResetPasswordDto,
  TSendTokenForResetPasswordDto,
  TResetPasswordModel,
  TSignUpDto,
  TSignUpModel,
  TSignInModel,
  TLoginDto
} from '../models';
import apiClient from '../utils/api-client';

export class AccountApi {
  static sendTokenForResetPassword = (data: TSendTokenForResetPasswordDto) =>
    apiClient.request<TResetPasswordModel>('/password-reset', { method: 'post', body: JSON.stringify(data) });

  static resetPassword = (data: TResetPasswordDto) =>
    apiClient.request<TResetPasswordModel>('/password-reset/reset', { method: 'post', body: JSON.stringify(data) });

  static signUp = (data: TSignUpDto) =>
    apiClient.request<TSignUpModel>('/auth/register', { method: 'post', body: JSON.stringify(data) });

  static login = (data: TLoginDto) =>
    apiClient.request<TSignUpModel>('/auth/login', { method: 'post', body: JSON.stringify(data) }).then((data) => {
      const { success, refreshToken, accessToken } = data;
      if (!success || !refreshToken || !accessToken) {
        return Promise.reject(data);
      }
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('accessToken', accessToken);
      return data;
    });

  static refreshToken = () =>
    apiClient
      .request<TSignInModel>('/auth/token', {
        method: 'post',
        body: JSON.stringify({
          token: localStorage.getItem('refreshToken')
        })
      })
      .then((data) => {
        const { success, refreshToken, accessToken } = data;
        if (!success || !refreshToken || !accessToken) {
          return Promise.reject(data);
        }
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessToken', accessToken);
        return data;
      });

  static logout = () =>
    apiClient
      .request<TSignInModel>('/auth/logout', {
        method: 'post',
        body: JSON.stringify({
          token: localStorage.getItem('refreshToken')
        })
      })
      .then((data) => {
        const { success } = data;
        if (!success) {
          return Promise.reject(data);
        }
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        return data;
      });

  static edit = (data: TSignUpDto) =>
    apiClient.requestWithRefresh<TSignUpModel>('/auth/user', { method: 'patch', body: JSON.stringify(data) });
}
