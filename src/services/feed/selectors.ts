import { RootState } from '..';

export const getFeedOrdersListSelector = (store: RootState) => store.feed.ordersList;
