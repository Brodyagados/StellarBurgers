import { TLoginDto, TSignUpDto, TUserModel } from '../../models';
import { AccountApi } from '../../api';
import { AppDispatch } from '..';

export const USER_REQUEST: 'USER/REQUEST' = 'USER/REQUEST';
export const USER_SUCCESS: 'USER/SUCCESS' = 'USER/SUCCESS';
export const USER_ERROR: 'USER/ERROR' = 'USER/ERROR';
export const SET_USER_AUTH_CHECKED: 'USER/SET_AUTH_CHECKED' = 'USER/SET_AUTH_CHECKED';
export const SET_USER: 'USER/SET' = 'USER/SET';

export const request = () => ({ type: USER_REQUEST });

export const setSuccess = () => ({ type: USER_SUCCESS });

export const setError = (errorMessage: string | null) => ({
  type: USER_ERROR,
  payload: errorMessage ?? 'Неизвестная ошибка'
});

export const setUser = (user: TUserModel | null) => ({
  type: SET_USER,
  payload: user
});

export const signIn = (userData: TSignUpDto) => async (dispatch: AppDispatch) => {
  dispatch(request());

  try {
    const data = await AccountApi.signUp(userData);
    if (data.success) {
      dispatch(setSuccess());
      dispatch(setUser(data.user));
    } else {
      dispatch(setError(data.message));
    }
    dispatch(setAuthChecked(true));
  } catch (e) {
    dispatch(setError((e as Error).message));
  }
};

export const login = (userData: TLoginDto) => async (dispatch: AppDispatch) => {
  dispatch(request());

  try {
    const data = await AccountApi.login(userData);
    if (data.success) {
      dispatch(setSuccess());
      dispatch(setUser(data.user));
    } else {
      dispatch(setError(data.message));
    }
    dispatch(setAuthChecked(true));
  } catch (e) {
    dispatch(setError((e as Error).message));
  }
};

export const setAuthChecked = (isAuthChecked: boolean) => ({
  type: SET_USER_AUTH_CHECKED,
  payload: isAuthChecked
});

export const checkUserAuth = () => async (dispatch: AppDispatch) => {
  if (localStorage.getItem('accessToken')) {
    AccountApi.get()
      .then(({ user }) => {
        dispatch(setUser(user));
      })
      .catch(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch(setUser(null));
      })
      .finally(() => dispatch(setAuthChecked(true)));
  } else {
    dispatch(setAuthChecked(true));
  }
};
