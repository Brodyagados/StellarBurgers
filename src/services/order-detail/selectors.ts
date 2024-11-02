import { RootState } from '..';

export const getOrderDetailSelector = (store: RootState) => store.orderDetail;

export const getOrderInformationSelector = (store: RootState) => store.orderDetail.order;
