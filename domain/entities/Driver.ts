import { Test } from "./Test";

export class Driver {
    public constructor(
      public id: number,
      public firstname: string,
      public lastname: string,
      public drivingLicenceNumber: number,
      public drivingExperience: number,
      public tests: Array<Test>
    ) {}
}