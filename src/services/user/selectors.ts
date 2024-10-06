// TODO: доработать типизацию на 5 спринте!!!
//@ts-ignore
export const getUserSelector = (store) => store.user.data;

// TODO: доработать типизацию на 5 спринте!!!
//@ts-ignore
export const getUserAuthCheckedSelector = (store) => ({ user: store.user.data, isAuthChecked: store.user.isAuthChecked });
