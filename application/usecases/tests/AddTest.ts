import { Bike } from "../../../domain/entities/Bike";
import { Driver } from "../../../domain/entities/Driver";
import { Test } from "../../../domain/entities/Test";
import { TestRepository } from "../../repositories/TestRepository";

export class AddTest {
  public constructor(
  private readonly testRepository: TestRepository,
  ) {}
  
  public async execute(bike: Bike, driver: Driver, loanStartDate: Date, loanEndDate: Date) {
    const id = (await this.testRepository.getTests()).length;
    const test = new Test(id, bike, driver, loanStartDate, loanEndDate);

    await this.testRepository.addTest(test);
  }
}