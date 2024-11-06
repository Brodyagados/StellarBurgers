import { TIngredientModel } from '../../models';
import { setIngredientDetail, removeIngredientDetail } from './actions';
import { ingredientDetailReducer, initialState, TIngredientDetailActions } from './reducer';

const ingredient: TIngredientModel = {
  _id: '67221b32b27b06001c3e520a',
  name: 'Тест',
  type: 'bun',
  image: '/123456',
  image_large: '/123456qwe',
  price: 0,
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
  calories: 0,
  count: 0
};

describe('Редьюсер для информации об ингредиенте', () => {
  it('инициализация хранилища', () => {
    expect(ingredientDetailReducer(undefined, { type: '' } as unknown as TIngredientDetailActions)).toEqual(initialState);
  });

  it('помещение информации об ингредиенте в хранилище', () => {
    expect(ingredientDetailReducer(initialState, setIngredientDetail(ingredient))).toEqual({
      ...initialState,
      ingredient
    });
  });

  it('удаление информации об ингредиенте изхранилища', () => {
    expect(ingredientDetailReducer({ ...initialState, ingredient }, removeIngredientDetail())).toEqual(initialState);
  });
});
