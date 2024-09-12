import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients-reducer';
import { ingredientsInConstructorReducer } from './ingredients-in-constructor-reducer';
import { ingredientDetailReducer } from './ingredient-detail-reducer';
import { orderDetailReducer } from './order-detail-reducer';

export type TBaseReducerAction = {
  type: string;
};

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredientsInConstructor: ingredientsInConstructorReducer,
  ingredientDetail: ingredientDetailReducer,
  orderDetail: orderDetailReducer
});
