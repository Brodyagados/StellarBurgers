import { combineReducers } from 'redux';
import { ingredientsListReducer, TIngredientsListActions } from './ingredients-list/reducer';
import { ingredientsInConstructorReducer, TIngredientsInConstructorActions } from './ingredients-in-constructor/reducer';
import { ingredientDetailReducer, TIngredientDetailActions } from './ingredient-detail/reducer';
import { orderDetailReducer, TOrderDetailActions } from './order-detail/reducer';
import { TUserActions, userReducer } from './user/reducer';
import { ThunkDispatch } from 'redux-thunk';
import { feedReducer, TFeedActions } from './feed/reducer';
import { profileOrdersReducer, TProfileOrdersActions } from './profile-orders/reducer';

export const rootReducer = combineReducers({
  ingredientsList: ingredientsListReducer,
  ingredientsInConstructor: ingredientsInConstructorReducer,
  ingredientDetail: ingredientDetailReducer,
  orderDetail: orderDetailReducer,
  user: userReducer,
  feed: feedReducer,
  profileOrders: profileOrdersReducer
});

export type TApplicationActions =
  | TIngredientDetailActions
  | TIngredientsInConstructorActions
  | TIngredientsListActions
  | TOrderDetailActions
  | TUserActions
  | TFeedActions
  | TProfileOrdersActions;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
