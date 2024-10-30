export type TOrderNumberModel = {
  number: number;
};

export type TOrderDetailModel = {
  name: string;
  order: TOrderNumberModel;
};

export type TOrderModel = {
  _id: string;
  status: 'done'; // TODO: Добавить остальные статусы
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
  ingredients: string[];
};
