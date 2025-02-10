import { Breakdown } from "../../../domain/entities/Breakdown";
import { BreakdownRepository } from "../../repositories/BreakdownRepository";

export class DeleteBreakdown {
  public constructor(
  private readonly breakdownRepository: BreakdownRepository,
  ) {}
  
  public async execute(breakdown: Breakdown) {
    await this.breakdownRepository.deleteBreakdown(breakdown);
  }
}