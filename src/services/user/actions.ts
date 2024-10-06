import { Dispatch, UnknownAction } from 'redux';
import { TLoginDto, TSignUpDto } from '../../models';
import { AccountApi } from '../../api';

export const USER_REQUEST = 'USER/REQUEST';
export const USER_SUCCESS = 'USER/SUCCESS';
export const USER_ERROR = 'USER/ERROR';

export const signIn = (userData: TSignUpDto) => async (dispatch: Dispatch<UnknownAction>) => {
  dispatch({ type: USER_REQUEST });

  try {
    const data = await AccountApi.signUp(userData);
    dispatch(
      data.success
        ? {
            type: USER_SUCCESS,
            payload: data.user
          }
        : {
            type: USER_ERROR,
            payload: data.message
          }
    );
  } catch (e) {
    return dispatch({
      type: USER_ERROR,
      payload: (e as Error).message
    });
  }
};

export const login = (userData: TLoginDto) => async (dispatch: Dispatch<UnknownAction>) => {
  dispatch({ type: USER_REQUEST });

  try {
    const data = await AccountApi.login(userData);
    dispatch(
      data.success
        ? {
            type: USER_SUCCESS,
            payload: data.user
          }
        : {
            type: USER_ERROR,
            payload: data.message
          }
    );
  } catch (e) {
    return dispatch({
      type: USER_ERROR,
      payload: (e as Error).message
    });
  }
};
