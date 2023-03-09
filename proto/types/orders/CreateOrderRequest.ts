// Original file: order.proto

import type { Status as _orders_Status, Status__Output as _orders_Status__Output } from '../orders/Status';

export interface CreateOrderRequest {
  'name'?: (string);
  'address'?: (string);
  'status'?: (_orders_Status);
  'dispatched'?: (boolean);
}

export interface CreateOrderRequest__Output {
  'name': (string);
  'address': (string);
  'status': (_orders_Status__Output);
  'dispatched': (boolean);
}
