export type TOrderNumberModel = {
  number: number;
};

export type TOrderDetailModel = {
  name: string;
  order: TOrderNumberModel;
};

export type TOrderModel = {
  _id: string;
  status: 'created' | 'pending' | 'done';
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  ingredients: string[];
};

export type TOrdersListModel = {
  success: boolean;
  orders: TOrderModel[];
  total: number;
  totalToday: number;
};
