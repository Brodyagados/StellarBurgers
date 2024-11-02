import { RootState } from '..';

export const getProfileOrdersListSelector = (store: RootState) => store.profileOrders.ordersList;
