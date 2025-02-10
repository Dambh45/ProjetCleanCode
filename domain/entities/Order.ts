import { Part } from "./Part";

export class Order {
    public constructor(
      public id: number,
      public parts: Array<Part>,
      public costs: number,
      public deliveryDate: Date
    ) {}
}