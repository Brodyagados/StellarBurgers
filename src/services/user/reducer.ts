import { TSignUpModel } from '../../models';
import { USER_ERROR, USER_REQUEST, USER_SUCCESS } from './actions';

type TAction = TLoadingAction | TSuccessAction | TErrorAction;

type TLoadingAction = {
  type: typeof USER_REQUEST;
};

type TSuccessAction = {
  type: typeof USER_SUCCESS;
  payload: Pick<TSignUpModel, 'user'>;
};

type TErrorAction = {
  type: typeof USER_ERROR;
  payload: string;
};

export type TUserState = {
  name: string | null;
  email: string | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: TUserState = {
  name: null,
  email: null,
  isLoading: false,
  error: null
};

export const orderDetailReducer = (state = initialState, action: TAction) => {
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
        ...action.payload,
        error: null
      };
    }
    case USER_ERROR: {
      return {
        name: null,
        email: null,
        isLoading: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
