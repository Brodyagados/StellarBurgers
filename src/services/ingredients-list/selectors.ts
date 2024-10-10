// TODO: доработать типизацию на 5 спринте!!!
//@ts-ignore
export const getIngredientsSelector = (store) => store.ingredientsList;

// TODO: доработать типизацию на 5 спринте!!!
//@ts-ignore
export const getIngredientByIdSelector = (store, id) => store.ingredientsList.ingredients.find(({ _id }) => _id === id);
