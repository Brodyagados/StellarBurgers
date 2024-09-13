export type IngredientsListModel = {
  data: IngredientModel[];
};

export type IngredientModel = {
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
