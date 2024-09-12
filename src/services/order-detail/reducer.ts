import { TBaseReducerAction } from '..';

type TInitialState = {
  order: object | null;
};

const initialState: TInitialState = {
  order: null
};

export const orderDetailReducer = (state = initialState, action: TBaseReducerAction) => {
  return state;
};
