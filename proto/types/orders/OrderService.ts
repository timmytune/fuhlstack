// Original file: order.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ById as _orders_ById, ById__Output as _orders_ById__Output } from '../orders/ById';
import type { CreateOrderRequest as _orders_CreateOrderRequest, CreateOrderRequest__Output as _orders_CreateOrderRequest__Output } from '../orders/CreateOrderRequest';
import type { Order as _orders_Order, Order__Output as _orders_Order__Output } from '../orders/Order';
import type { Orders as _orders_Orders, Orders__Output as _orders_Orders__Output } from '../orders/Orders';
import type { Pagination as _orders_Pagination, Pagination__Output as _orders_Pagination__Output } from '../orders/Pagination';
import type { StandardReturn as _orders_StandardReturn, StandardReturn__Output as _orders_StandardReturn__Output } from '../orders/StandardReturn';
import type { UpdateAddressRequest as _orders_UpdateAddressRequest, UpdateAddressRequest__Output as _orders_UpdateAddressRequest__Output } from '../orders/UpdateAddressRequest';

export interface OrderServiceClient extends grpc.Client {
  CreateOrder(argument: _orders_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _orders_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _orders_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  CreateOrder(argument: _orders_CreateOrderRequest, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _orders_CreateOrderRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _orders_CreateOrderRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _orders_CreateOrderRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  createOrder(argument: _orders_CreateOrderRequest, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  
  DeleteOrder(argument: _orders_ById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_StandardReturn__Output>): grpc.ClientUnaryCall;
  DeleteOrder(argument: _orders_ById, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_StandardReturn__Output>): grpc.ClientUnaryCall;
  DeleteOrder(argument: _orders_ById, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_StandardReturn__Output>): grpc.ClientUnaryCall;
  DeleteOrder(argument: _orders_ById, callback: grpc.requestCallback<_orders_StandardReturn__Output>): grpc.ClientUnaryCall;
  deleteOrder(argument: _orders_ById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_StandardReturn__Output>): grpc.ClientUnaryCall;
  deleteOrder(argument: _orders_ById, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_StandardReturn__Output>): grpc.ClientUnaryCall;
  deleteOrder(argument: _orders_ById, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_StandardReturn__Output>): grpc.ClientUnaryCall;
  deleteOrder(argument: _orders_ById, callback: grpc.requestCallback<_orders_StandardReturn__Output>): grpc.ClientUnaryCall;
  
  FindAll(argument: _orders_Pagination, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Orders__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _orders_Pagination, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_Orders__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _orders_Pagination, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Orders__Output>): grpc.ClientUnaryCall;
  FindAll(argument: _orders_Pagination, callback: grpc.requestCallback<_orders_Orders__Output>): grpc.ClientUnaryCall;
  findAll(argument: _orders_Pagination, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Orders__Output>): grpc.ClientUnaryCall;
  findAll(argument: _orders_Pagination, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_Orders__Output>): grpc.ClientUnaryCall;
  findAll(argument: _orders_Pagination, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Orders__Output>): grpc.ClientUnaryCall;
  findAll(argument: _orders_Pagination, callback: grpc.requestCallback<_orders_Orders__Output>): grpc.ClientUnaryCall;
  
  FindOne(argument: _orders_ById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _orders_ById, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _orders_ById, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _orders_ById, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  findOne(argument: _orders_ById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  findOne(argument: _orders_ById, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  findOne(argument: _orders_ById, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  findOne(argument: _orders_ById, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  
  UpdateAddress(argument: _orders_UpdateAddressRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  UpdateAddress(argument: _orders_UpdateAddressRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  UpdateAddress(argument: _orders_UpdateAddressRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  UpdateAddress(argument: _orders_UpdateAddressRequest, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  updateAddress(argument: _orders_UpdateAddressRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  updateAddress(argument: _orders_UpdateAddressRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  updateAddress(argument: _orders_UpdateAddressRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  updateAddress(argument: _orders_UpdateAddressRequest, callback: grpc.requestCallback<_orders_Order__Output>): grpc.ClientUnaryCall;
  
}

export interface OrderServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateOrder: grpc.handleUnaryCall<_orders_CreateOrderRequest__Output, _orders_Order>;
  
  DeleteOrder: grpc.handleUnaryCall<_orders_ById__Output, _orders_StandardReturn>;
  
  FindAll: grpc.handleUnaryCall<_orders_Pagination__Output, _orders_Orders>;
  
  FindOne: grpc.handleUnaryCall<_orders_ById__Output, _orders_Order>;
  
  UpdateAddress: grpc.handleUnaryCall<_orders_UpdateAddressRequest__Output, _orders_Order>;
  
}

export interface OrderServiceDefinition extends grpc.ServiceDefinition {
  CreateOrder: MethodDefinition<_orders_CreateOrderRequest, _orders_Order, _orders_CreateOrderRequest__Output, _orders_Order__Output>
  DeleteOrder: MethodDefinition<_orders_ById, _orders_StandardReturn, _orders_ById__Output, _orders_StandardReturn__Output>
  FindAll: MethodDefinition<_orders_Pagination, _orders_Orders, _orders_Pagination__Output, _orders_Orders__Output>
  FindOne: MethodDefinition<_orders_ById, _orders_Order, _orders_ById__Output, _orders_Order__Output>
  UpdateAddress: MethodDefinition<_orders_UpdateAddressRequest, _orders_Order, _orders_UpdateAddressRequest__Output, _orders_Order__Output>
}
