import { SUBMIT_ORDER_REQUEST, SUBMIT_ORDER_SUCCESS, SUBMIT_ORDER_ERROR } from './actions';

export type TOrderDetailActions = TLoadingAction | TSuccessAction | TErrorAction;

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

export type TOrderDetailState = {
  number: number | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: TOrderDetailState = {
  number: null,
  isLoading: false,
  error: null
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
        number: null,
        isLoading: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
