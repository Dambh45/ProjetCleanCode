import { Part } from "./Part";

export class Stock {
    public constructor(
      public part: Part,
      public quantity: number,
    ) {}
}