import { TOrderModel } from '../../models';
import {
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
  SUBMIT_ORDER_ERROR,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  CLEAR_ORDER
} from './actions';

export type TOrderDetailActions =
  | TLoadingAction
  | TSuccessAction
  | TErrorAction
  | TGetAction
  | TGetSuccessAction
  | TGetErrorAction
  | TClearAction;

type TLoadingAction = {
  type: typeof SUBMIT_ORDER_REQUEST;
};

type TSuccessAction = {
  type: typeof SUBMIT_ORDER_SUCCESS;
  payload: number;
};

type TErrorAction = {
  type: typeof SUBMIT_ORDER_ERROR;
  payload: string;
};

type TGetAction = {
  type: typeof GET_ORDER_REQUEST;
};

type TGetSuccessAction = {
  type: typeof GET_ORDER_SUCCESS;
  payload: TOrderModel;
};

type TGetErrorAction = {
  type: typeof GET_ORDER_ERROR;
  payload: string;
};

type TClearAction = {
  type: typeof CLEAR_ORDER;
};

export type TOrderDetailState = {
  number: number | null;
  isLoading: boolean;
  error: string | null;
  order: TOrderModel | null;
};

export const initialState: TOrderDetailState = {
  number: null,
  isLoading: false,
  error: null,
  order: null
};

export const orderDetailReducer = (state = initialState, action: TOrderDetailActions) => {
  switch (action.type) {
    case SUBMIT_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SUBMIT_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        number: action.payload,
        error: null
      };
    }
    case SUBMIT_ORDER_ERROR: {
      return {
        ...state,
        number: null,
        isLoading: false,
        error: action.payload
      };
    }
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        order: action.payload,
        error: null
      };
    }
    case GET_ORDER_ERROR: {
      return {
        ...state,
        order: null,
        isLoading: false,
        error: action.payload
      };
    }
    case CLEAR_ORDER: {
      return {
        ...state,
        order: null
      };
    }
    default: {
      return state;
    }
  }
};
