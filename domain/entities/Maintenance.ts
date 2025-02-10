import { Bike } from './Bike'

export class Maintenance {
    public constructor(
      public id: number,
      public name: string,
      public description: string,
      public bike: Bike,
      public kilometer: number,
      public price: number,
    ) {}
}