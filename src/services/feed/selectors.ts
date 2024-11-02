import { RootState } from '..';

export const getOrdersListSelector = (store: RootState) => store.feed.ordersList;
