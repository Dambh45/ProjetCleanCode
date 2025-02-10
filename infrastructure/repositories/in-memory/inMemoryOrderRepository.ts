import { OrderRepository } from "../../../application/repositories/OrderRepository";
import { Order } from "../../../domain/entities/Order";
import { Part } from "../../../domain/entities/Part";

export class InMemoryOrderRepository implements OrderRepository {
  public constructor(private readonly orders: Array<Order>) {
    this.addOrder(
      new Order(
        1,
        [new Part("injecteurs", 60)],
        60,
        new Date()
      ))
  }

  public async addOrder(order: Order): Promise<void> {
    this.orders.push(order);
  }

  public async getOrders(): Promise<Order[]> {
    return this.orders;
  }

  public async getOrder(id: number): Promise<Order | null> {
    return this.orders.filter(order => order.id == id)[0];
  }

  public async deleteOrder(Order: Order): Promise<void> {
    const index = this.orders.indexOf(Order, 0);
    if (index > -1) {
        this.orders.splice(index, 1);
    }
  }
}