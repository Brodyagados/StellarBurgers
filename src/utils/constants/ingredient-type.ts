type IngredientTypeData = {
  value: string;
  description: string;
};

export const ingredientType: Record<string, string> = {
  Bun: 'bun',
  Main: 'main',
  Sauce: 'sauce'
};

export const ingredientTypeDescription: Record<string, string> = {
  [ingredientType.Bun]: 'Булки',
  [ingredientType.Sauce]: 'Соусы',
  [ingredientType.Main]: 'Начинки'
};

export const getIngredientTypeDataList = (): IngredientTypeData[] =>
  Object.values(ingredientType).map((value) => ({ value, description: ingredientTypeDescription[value] }));
