import { Bike } from './Bike'

export class Guarantee {
    public constructor(
      public id: number,
      public name: string,
      public description: string,
      public bike: Bike
    ) {}
}