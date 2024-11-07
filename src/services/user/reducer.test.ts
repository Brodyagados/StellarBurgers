import { TUserModel } from '../../models';
import { request, setAuthChecked, setError, setSuccess, setUser } from './actions';
import { userReducer, initialState, TUserActions } from './reducer';

const errorMessage = 'Ошибка';
const isAuthChecked = true;
const user: TUserModel = {
  name: 'Иванов Иван Иванович',
  email: 'ivanov@localhost.ru'
};

describe('Редьюсер для информации о пользователе', () => {
  it('инициализация хранилища', () => {
    expect(userReducer(undefined, { type: '' } as unknown as TUserActions)).toEqual(initialState);
  });

  it('начало получения информации о пользователе', () => {
    expect(userReducer(initialState, request())).toEqual({ ...initialState, isLoading: true });
  });

  it('успешное получение информации о пользователе', () => {
    expect(userReducer(initialState, setSuccess())).toEqual(initialState);
  });

  it('ошибка получения информации о пользователе', () => {
    expect(userReducer(initialState, setError(errorMessage))).toEqual({
      ...initialState,
      error: errorMessage
    });
  });

  it('установка признака авторизации', () => {
    expect(userReducer(initialState, setAuthChecked(isAuthChecked))).toEqual({ ...initialState, isAuthChecked });
  });

  it('сохранение информации о пользователе', () => {
    expect(userReducer(initialState, setUser(user))).toEqual({ ...initialState, data: user });
  });
});
