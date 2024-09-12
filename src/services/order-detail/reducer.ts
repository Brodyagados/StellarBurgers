import { SUBMIT_ORDER_LOADING, SUBMIT_ORDER_SUCCESS, SUBMIT_ORDER_ERROR } from './actions';

type TAction = TLoadingAction | TSuccessAction | TErrorAction;

type TLoadingAction = {
  type: typeof SUBMIT_ORDER_LOADING;
};

type TSuccessAction = {
  type: typeof SUBMIT_ORDER_SUCCESS;
  payload: number;
};

type TErrorAction = {
  type: typeof SUBMIT_ORDER_ERROR;
  payload: string;
};

type TOrderDetailState = {
  number: number | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: TOrderDetailState = {
  number: null,
  isLoading: false,
  error: null
};

export const orderDetailReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case SUBMIT_ORDER_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case SUBMIT_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        number: action.payload
      };
    }
    case SUBMIT_ORDER_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
