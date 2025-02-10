import { Order } from "../../../domain/entities/Order";
import { Part } from "../../../domain/entities/Part";
import { OrderRepository } from "../../repositories/OrderRepository";

export class AddOrder {
  public constructor(
  private readonly orderRepository: OrderRepository,
  ) {}
  
  public async execute(parts: Array<Part>, costs: number, deliveryDate: Date) {
    const id = (await this.orderRepository.getOrders()).length;
    const order = new Order(id, parts, costs, deliveryDate);

    await this.orderRepository.addOrder(order);
  }
}