enum OrderStatus {
  DECLINE = 'DECLINE',
  CLOSE = 'CLOSE',
  OPEN = 'OPEN',
  REJECT = 'REJECT',
  SENDING = 'SENDING',
  SENDED = 'SENDED',
}

interface UpdateOrder {
  state: OrderStatus;
}
