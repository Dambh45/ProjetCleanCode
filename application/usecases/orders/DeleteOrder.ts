import { Order } from "../../../domain/entities/Order";
import { OrderRepository } from "../../repositories/OrderRepository";

export class DeleteOrder {
  public constructor(
  private readonly orderRepository: OrderRepository,
  ) {}
  
  public async execute(order: Order) {
    await this.orderRepository.deleteOrder(order);
  }
}