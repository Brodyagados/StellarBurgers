import { TIngredientModel } from '../../models';
import {
  ADD_INGREDIENT_COUNT,
  GET_INGREDIENTS_LIST_ERROR,
  GET_INGREDIENTS_LIST_REQUEST,
  GET_INGREDIENTS_LIST_SUCCESS
} from './actions';
import { ingredientsListReducer, initialState, TIngredientsListActions } from './reducer';

const errorMessage = 'Ошибка';
const ingredients: TIngredientModel[] = [
  {
    _id: '67221b32b27b06001c3e520a',
    name: 'Ингредиент 1',
    type: 'ingredient',
    image: '/123456',
    image_large: '/123456qwe',
    price: 0,
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    count: 0
  },
  {
    _id: '567567567b27b06001c3e520a',
    name: 'Ингредиент 2',
    type: 'ingredient',
    image: '/123456',
    image_large: '/123456qwe',
    price: 0,
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    count: 0
  }
];
const ingredientsMap = new Map(ingredients.map((ingredient) => [ingredient._id, ingredient]));
const ingredientCount = 5;
const [firstIngredient, ...otherIngredients] = ingredients;

describe('Редьюсер для списка ингредиентов', () => {
  it('инициализация хранилища', () => {
    expect(ingredientsListReducer(undefined, { type: '' } as unknown as TIngredientsListActions)).toEqual(initialState);
  });

  it('начало получения списка ингредиентов', () => {
    expect(ingredientsListReducer(initialState, { type: GET_INGREDIENTS_LIST_REQUEST })).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('успешное получение списка ингредиентов', () => {
    expect(ingredientsListReducer(initialState, { type: GET_INGREDIENTS_LIST_SUCCESS, payload: ingredients })).toEqual({
      ...initialState,
      ingredients,
      uniqueIngredients: ingredientsMap
    });
  });

  it('ошибка получения списка ингредиентов', () => {
    expect(ingredientsListReducer(initialState, { type: GET_INGREDIENTS_LIST_ERROR, payload: errorMessage })).toEqual({
      ...initialState,
      error: errorMessage
    });
  });

  it('увеличения количества выбранного ингредиента в списке ингредиентов', () => {
    expect(
      ingredientsListReducer(
        { ...initialState, ingredients, uniqueIngredients: ingredientsMap },
        {
          type: ADD_INGREDIENT_COUNT,
          payload: { id: firstIngredient._id, count: ingredientCount }
        }
      )
    ).toEqual({
      ...initialState,
      ingredients: [{ ...firstIngredient, count: firstIngredient.count + ingredientCount }, ...otherIngredients],
      uniqueIngredients: ingredientsMap
    });
  });
});
