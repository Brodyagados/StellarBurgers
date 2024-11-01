import { combineReducers } from 'redux';
import { ingredientsListReducer, TIngredientsListActions } from './ingredients-list/reducer';
import { ingredientsInConstructorReducer, TIngredientsInConstructorActions } from './ingredients-in-constructor/reducer';
import { ingredientDetailReducer, TIngredientDetailActions } from './ingredient-detail/reducer';
import { orderDetailReducer, TOrderDetailActions } from './order-detail/reducer';
import { TUserActions, userReducer } from './user/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { TWebSocketActions, webSocketReducer } from './middleware/reducer';

export const rootReducer = combineReducers({
  ingredientsList: ingredientsListReducer,
  ingredientsInConstructor: ingredientsInConstructorReducer,
  ingredientDetail: ingredientDetailReducer,
  orderDetail: orderDetailReducer,
  user: userReducer,
  webSocket: webSocketReducer
});

export type TApplicationActions =
  | TIngredientDetailActions
  | TIngredientsInConstructorActions
  | TIngredientsListActions
  | TOrderDetailActions
  | TUserActions
  | TWebSocketActions;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
