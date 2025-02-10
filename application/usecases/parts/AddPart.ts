import { Part } from "../../../domain/entities/Part";
import { PartRepository } from "../../repositories/PartRepository";

export class AddPart {
  public constructor(
  private readonly partRepository: PartRepository,
  ) {}
  
  public async execute(name: string, price: number) {
    const part = new Part(name, price);

    await this.partRepository.addPart(part);
  }
}