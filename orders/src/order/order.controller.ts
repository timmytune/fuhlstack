import { Controller, Get, Post, Req, Body, Param, Query } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices/decorators';
import { Order as OrderGRPC } from '../../../proto/types/orders/Order';
import { CreateOrderRequest } from '../../../proto/types/orders/CreateOrderRequest';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Order } from './order.entity';
import { Status } from '../../../proto/types/orders/Status';
import { StatusEnum } from './enum/order.status.enum';
import { OrderService } from './order.service';



@Controller()
export class OrderController {

    constructor(
        private orderService: OrderService,
    ){}
    
    @GrpcMethod('OrderService', 'CreateOrder')
    async CreateOrder(data: CreateOrderRequest, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<OrderGRPC> {
        
        if(!data.address) throw new Error("invalid address provided");
        if(!data.name) throw new Error("invalid customer name provided");
        if(!data.status) throw new Error("invalid order status");

        let status: StatusEnum = StatusEnum.Pending  

        switch (data.status) {
            case Status.Completed:
                status = StatusEnum.Completed
                break;
            case Status.Processing:
                status = StatusEnum.Processing
                break;
        }

        return await this.orderService.create({address: data.address, name: data.name, status, dispatched: data.dispatched ? true : false})
        
    }


}
