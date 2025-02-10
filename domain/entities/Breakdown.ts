import { Bike } from './Bike'

export class Breakdown {
    public constructor(
      public id: number,
      public reason: string,
      public bike: Bike,
      public costs: number
    ) {}
}