import { PartRepository } from "../../repositories/PartRepository";

export class ListParts {
  public constructor(
  private readonly partRepository: PartRepository,
  ) {}
  
  public async execute() {
    return await this.partRepository.getParts();
  }
}