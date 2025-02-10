import { TestRepository } from "../../repositories/TestRepository";

export class ListTests {
  public constructor(
  private readonly testRepository: TestRepository,
  ) {}
  
  public async execute() {
    return await this.testRepository.getTests();
  }
}