export type OrderNumberModel = {
  number: number;
};

export type OrderDetailModel = {
  name: string;
  order: OrderNumberModel;
};
