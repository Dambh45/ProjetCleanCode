import { Driver } from "../../../domain/entities/Driver";
import { TestRepository } from "../../repositories/TestRepository";

export class GetDriverTests {
  public constructor(
  private readonly testRepository: TestRepository,
  ) {}
  
  public async execute(driver : Driver) {
    return await this.testRepository.getDriverTests(driver);
  }
}