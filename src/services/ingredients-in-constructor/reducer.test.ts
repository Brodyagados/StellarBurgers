import { v4 as uuid4 } from 'uuid';
import { TConstructorIngredientModel } from '../../models';
import {
  ADD_INGREDIENT_IN_CONSTRUCTOR,
  addBunInConstructor,
  clearIngredientsInConstructor,
  removeIngredientInConstructor,
  setIngredientsInConstructor
} from './actions';
import { ingredientsInConstructorReducer, initialState, TIngredientsInConstructorActions } from './reducer';

const bun: TConstructorIngredientModel = {
  _id: '67221b32b27b06001c3e520a',
  name: 'Булка',
  type: 'bun',
  image: '/123456',
  image_large: '/123456qwe',
  price: 0,
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  count: 0,
  uniqueId: uuid4()
};

const ingredients: TConstructorIngredientModel[] = [
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
    count: 0,
    uniqueId: uuid4()
  },
  {
    _id: '67221b32b27b06001c3e520a',
    name: 'Ингредиент 2',
    type: 'ingredient',
    image: '/123456',
    image_large: '/123456qwe',
    price: 0,
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    count: 0,
    uniqueId: uuid4()
  }
];

const sortedIngredients: TConstructorIngredientModel[] = [...ingredients].sort();

describe('Редьюсер для конструктора бургера', () => {
  it('инициализация хранилища', () => {
    expect(ingredientsInConstructorReducer(undefined, { type: '' } as unknown as TIngredientsInConstructorActions)).toEqual(
      initialState
    );
  });

  it('добавление булки в конструктор', () => {
    expect(ingredientsInConstructorReducer(undefined, addBunInConstructor(bun))).toEqual({ ...initialState, bun });
  });

  it('добавление ингредиента в конструктор', () => {
    expect(
      ingredientsInConstructorReducer(initialState, {
        type: ADD_INGREDIENT_IN_CONSTRUCTOR,
        payload: ingredients[0]
      })
    ).toEqual({
      ...initialState,
      ingredients: [...initialState.ingredients, ingredients[0]]
    });
  });

  it('удаление ингредиента из конструктора', () => {
    expect(
      ingredientsInConstructorReducer(
        { ...initialState, ingredients: [ingredients[0]] },
        removeIngredientInConstructor(ingredients[0].uniqueId)
      )
    ).toEqual(initialState);
  });

  it('сохранение ингредиентов в измененном порядке в конструктор', () => {
    expect(
      ingredientsInConstructorReducer({ ...initialState, ingredients }, setIngredientsInConstructor(sortedIngredients))
    ).toEqual({ ...initialState, ingredients: sortedIngredients });
  });

  it('удаление ингредиентов из конструктора', () => {
    expect(ingredientsInConstructorReducer({ ...initialState, ingredients }, clearIngredientsInConstructor())).toEqual(
      initialState
    );
  });
});
