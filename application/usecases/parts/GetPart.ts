import { PartRepository } from "../../repositories/PartRepository";

export class GetPart {
  public constructor(
  private readonly partRepository: PartRepository,
  ) {}
  
  public async execute(name : string) {
    return await this.partRepository.getPart(name);
  }
}