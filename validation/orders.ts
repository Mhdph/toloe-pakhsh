import {z} from 'zod';

enum OrderStatus {
  DECLINE = 'DECLINE',
  CLOSE = 'CLOSE',
  OPEN = 'OPEN',
  REJECT = 'REJECT',
  SENDING = 'SENDING',
  SENDED = 'SENDED',
}

export const UpdateOrderSchema = z.object({
  state: z.nativeEnum(OrderStatus),
});
