// Original file: order.proto

import type { Status as _orders_Status, Status__Output as _orders_Status__Output } from '../orders/Status';

export interface Order {
  'id'?: (string);
  'name'?: (string);
  'address'?: (string);
  'status'?: (_orders_Status);
  'dispatched'?: (boolean);
  'createdAt'?: (string);
  'updatedAt'?: (string);
}

export interface Order__Output {
  'id': (string);
  'name': (string);
  'address': (string);
  'status': (_orders_Status__Output);
  'dispatched': (boolean);
  'createdAt': (string);
  'updatedAt': (string);
}
