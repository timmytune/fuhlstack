import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { OrderServiceClient as _orders_OrderServiceClient, OrderServiceDefinition as _orders_OrderServiceDefinition } from './orders/OrderService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  orders: {
    ById: MessageTypeDefinition
    CreateOrderRequest: MessageTypeDefinition
    Order: MessageTypeDefinition
    OrderService: SubtypeConstructor<typeof grpc.Client, _orders_OrderServiceClient> & { service: _orders_OrderServiceDefinition }
    Orders: MessageTypeDefinition
    Pagination: MessageTypeDefinition
    StandardReturn: MessageTypeDefinition
    Status: EnumTypeDefinition
    UpdateAddressRequest: MessageTypeDefinition
  }
}

