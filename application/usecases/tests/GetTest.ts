import { TestRepository } from "../../repositories/TestRepository";

export class GetTest {
  public constructor(
  private readonly testRepository: TestRepository,
  ) {}
  
  public async execute(id : number) {
    return await this.testRepository.getTest(id);
  }
}