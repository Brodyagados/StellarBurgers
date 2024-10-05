import { TResetPasswordDto, TSendTokenForResetPasswordDto, TResetPasswordModel } from '../models';
import apiClient from '../utils/api-client';

export class AccountApi {
  static sendTokenForResetPassword = (data: TSendTokenForResetPasswordDto) =>
    apiClient.request<TResetPasswordModel>('/password-reset', { method: 'post', body: JSON.stringify(data) });

  static resetPassword = (data: TResetPasswordDto) =>
    apiClient.request<TResetPasswordModel>('/password-reset/reset', { method: 'post', body: JSON.stringify(data) });
}
