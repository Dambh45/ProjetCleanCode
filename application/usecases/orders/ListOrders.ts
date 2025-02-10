import { OrderRepository } from "../../repositories/OrderRepository";

export class ListOrders {
  public constructor(
  private readonly orderRepository: OrderRepository,
  ) {}
  
  public async execute() {
    return await this.orderRepository.getOrders();
  }
}