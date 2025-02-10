import { Test } from "../../../domain/entities/Test";
import { TestRepository } from "../../repositories/TestRepository";

export class DeleteTest {
  public constructor(
  private readonly testRepository: TestRepository,
  ) {}
  
  public async execute(test: Test) {
    await this.testRepository.deleteTest(test);
  }
}