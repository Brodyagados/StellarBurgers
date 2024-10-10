import { RootState } from '..';

export const getUserSelector = (store: RootState) => store.user.data;

export const getUserAuthCheckedSelector = (store: RootState) => ({
  user: store.user.data,
  isAuthChecked: store.user.isAuthChecked
});
