import { OrderRepository } from "../../repositories/OrderRepository";

export class GetOrder {
  public constructor(
  private readonly orderRepository: OrderRepository,
  ) {}
  
  public async execute(id : number) {
    return await this.orderRepository.getOrder(id);
  }
}