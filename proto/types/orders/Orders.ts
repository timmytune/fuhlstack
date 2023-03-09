// Original file: order.proto

import type { Order as _orders_Order, Order__Output as _orders_Order__Output } from '../orders/Order';

export interface Orders {
  'orders'?: (_orders_Order)[];
  'limit'?: (number);
  'skip'?: (number);
  'totla'?: (number);
}

export interface Orders__Output {
  'orders': (_orders_Order__Output)[];
  'limit': (number);
  'skip': (number);
  'totla': (number);
}
