import { combineReducers } from 'redux';
import { ingredientsListReducer } from './ingredients-list/reducer';
import { ingredientsInConstructorReducer } from './ingredients-in-constructor/reducer';
import { ingredientDetailReducer } from './ingredient-detail/reducer';
import { orderDetailReducer } from './order-detail/reducer';

export const rootReducer = combineReducers({
  ingredientsList: ingredientsListReducer,
  ingredientsInConstructor: ingredientsInConstructorReducer,
  ingredientDetail: ingredientDetailReducer,
  orderDetail: orderDetailReducer
});
