import { TUserModel } from '../../models';
import { SET_USER, SET_USER_AUTH_CHECKED, USER_ERROR, USER_REQUEST, USER_SUCCESS } from './actions';

export type TUserActions = TLoadingAction | TSuccessAction | TErrorAction | TSetAuthChecked | TSetUser;

type TLoadingAction = {
  type: typeof USER_REQUEST;
};

type TSuccessAction = {
  type: typeof USER_SUCCESS;
};

type TErrorAction = {
  type: typeof USER_ERROR;
  payload: string;
};

type TSetAuthChecked = {
  type: typeof SET_USER_AUTH_CHECKED;
  payload: boolean;
};

type TSetUser = {
  type: typeof SET_USER;
  payload: TUserModel | null;
};

export type TUserState = {
  data: TUserModel | null;
  isLoading: boolean;
  error: string | null;
  isAuthChecked: boolean;
};

export const initialState: TUserState = {
  data: null,
  isLoading: false,
  error: null,
  isAuthChecked: false
};

export const userReducer = (state = initialState, action: TUserActions) => {
  switch (action.type) {
    case USER_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null
      };
    }
    case USER_ERROR: {
      return {
        ...state,
        data: null,
        isLoading: false,
        error: action.payload
      };
    }
    case SET_USER_AUTH_CHECKED: {
      return {
        ...state,
        isAuthChecked: action.payload
      };
    }
    case SET_USER: {
      return {
        ...state,
        data: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
