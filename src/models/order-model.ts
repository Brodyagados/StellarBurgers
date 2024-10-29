export type TOrderNumberModel = {
  number: number;
};

export type TOrderDetailModel = {
  name: string;
  order: TOrderNumberModel;
};
