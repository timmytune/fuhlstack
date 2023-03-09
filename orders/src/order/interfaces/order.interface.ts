import { StatusEnum } from '../enum/order.status.enum';

export interface OrderInterface {
  name: string, 
  address: string, 
  status: StatusEnum, 
  dispatched: boolean
  }