import { Part } from "./Part";

export class Bike {
    public constructor(
      public id: number,
      public name: string,
      public price: number,
      public mass: number,
      public kilometers: number,
      public cylinderCapacity: number,
      public tankCapacity: number,
      public consommation: number,
      public parts: Array<Part>
    ) {}
}