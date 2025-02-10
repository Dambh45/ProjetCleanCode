import { BreakdownRepository } from "../../repositories/BreakdownRepository";

export class ListBreakdowns {
  public constructor(
  private readonly breakdownRepository: BreakdownRepository,
  ) {}
  
  public async execute() {
    return await this.breakdownRepository.getBreakdowns();
  }
}