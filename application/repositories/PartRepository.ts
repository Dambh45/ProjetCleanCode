import { Part } from "../../domain/entities/Part";

export interface PartRepository {
  addPart(part: Part): Promise<void>;
  getParts(): Promise<Array<Part>>;
  getPart(name: string): Promise<Part | null>
  deletePart(part: Part): Promise<void>
}