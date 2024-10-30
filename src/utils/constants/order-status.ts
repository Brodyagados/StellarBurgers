type OrderStatusMetadata = {
  color: string;
  description: string;
};

export const orderStatus: Record<string, string> = {
  Done: 'done'
  // TODO: Добавить остальные статусы
};

export const orderStatusMetadata: Record<string, OrderStatusMetadata> = {
  [orderStatus.Done]: {
    color: '#F2F2F3',
    description: 'Выполнен'
  }
};
