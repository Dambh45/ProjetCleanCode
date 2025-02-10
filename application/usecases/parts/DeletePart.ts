import { Part } from "../../../domain/entities/Part";
import { PartRepository } from "../../repositories/PartRepository";

export class DeletePart {
  public constructor(
  private readonly partRepository: PartRepository,
  ) {}
  
  public async execute(part: Part) {
    await this.partRepository.deletePart(part);
  }
}