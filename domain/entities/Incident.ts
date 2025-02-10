import { Driver } from "./Driver";

export class Incident {
    public constructor(
      public id: number,
      public type: string,
      public description: string,
      public driver: Driver,
    ) {}
}