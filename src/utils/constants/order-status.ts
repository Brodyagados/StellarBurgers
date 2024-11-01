type OrderStatusMetadata = {
  color: string;
  description: string;
};

export enum orderStatus {
  CREATED = 'created',
  PENDING = 'pending',
  DONE = 'done'
}

export const orderStatusMetadata: Record<orderStatus, OrderStatusMetadata> = {
  [orderStatus.CREATED]: {
    color: '#F2F2F3',
    description: 'Готовится'
  },
  [orderStatus.PENDING]: {
    color: '#E52B1A',
    description: 'Отменен'
  },
  [orderStatus.DONE]: {
    color: '#00cccc',
    description: 'Выполнен'
  }
};
