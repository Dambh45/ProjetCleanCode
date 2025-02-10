import { Bike } from "./Bike";
import { Driver } from "./Driver";

export class Test {
    public constructor(
      public id: number,
      public bike: Bike,
      public driver: Driver,
      public loanStartDate: Date,
      public loanEndDate: Date,
    ) {}
}