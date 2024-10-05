import { TResetPasswordDto, TResetPasswordModel } from '../models';
import apiClient from '../utils/api-client';

export class AccountApi {
  static resetPassword = (data: TResetPasswordDto) =>
    apiClient.request<TResetPasswordModel>('/password-reset', { method: 'post', body: JSON.stringify(data) });
}
