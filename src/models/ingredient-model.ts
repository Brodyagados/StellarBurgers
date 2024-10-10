export type TIngredientsListModel = {
  data: TIngredientModel[];
};

export type TIngredientModel = {
  _id: string;
  name: string;
  type: string;
  image: string;
  image_large: string;
  price: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  count: number;
};

export type TConstructorIngredientModel = TIngredientModel & { uniqueId: string };
