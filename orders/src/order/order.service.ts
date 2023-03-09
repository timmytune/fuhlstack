import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, FindManyOptions } from 'typeorm';
import { OrderInterface } from './interfaces/order.interface';
import { Order } from './order.entity';


@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
    ){}

  async create(order: OrderInterface): Promise<Order> {
    return this.orderRepository.save(order);
  }

  findOne(id: string): Promise<Order> {
    return this.orderRepository.findOneBy({ id });
  }

  delete(id: string): Promise<any> {
    return this.orderRepository.softDelete(id)
  }

  updateAddress(id: string, address: string): Promise<any> {
    return this.orderRepository.update(id, {address: address})
  }

  findAll(skip: number, limit: number): Promise<[Order[], number]> {

    let query: FindManyOptions = {
        skip: skip,
        take: limit,
        order: {
          "createdAt": "DESC",
          "updatedAt": "DESC"
        }
    }

    return this.orderRepository.findAndCount(query)
  }
}