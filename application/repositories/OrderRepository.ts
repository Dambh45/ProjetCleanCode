import { Order } from "../../domain/entities/Order";

export interface OrderRepository {
  addOrder(order: Order): Promise<void>;
  getOrders(): Promise<Array<Order>>;
  getOrder(id: number): Promise<Order | null>
  deleteOrder(order: Order): Promise<void>
}