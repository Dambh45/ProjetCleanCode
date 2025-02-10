import { Bike } from "../../../domain/entities/Bike";
import { TestRepository } from "../../repositories/TestRepository";

export class GetBikeTests {
  public constructor(
  private readonly testRepository: TestRepository,
  ) {}
  
  public async execute(bike : Bike) {
    return await this.testRepository.getBikeTests(bike);
  }
}