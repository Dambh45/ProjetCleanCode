import { PartRepository } from "../../../application/repositories/PartRepository";
import { Part } from "../../../domain/entities/Part";

export class InMemoryPartRepository implements PartRepository {
  public constructor(private readonly parts: Array<Part>) {
    this.addPart(new Part("injecteurs", 60))
  }

  public async addPart(part: Part): Promise<void> {
    this.parts.push(part);
  }

  public async getParts(): Promise<Part[]> {
    return this.parts;
  }

  public async getPart(name: string): Promise<Part | null> {
    return this.parts.filter(part => part.name == name)[0];
  }

  public async deletePart(part: Part): Promise<void> {
    const index = this.parts.indexOf(part, 0);
    if (index > -1) {
        this.parts.splice(index, 1);
    }
  }
}