import { BreakdownRepository } from "../../repositories/BreakdownRepository";

export class GetBreakdown {
  public constructor(
  private readonly breakdownRepository: BreakdownRepository,
  ) {}
  
  public async execute(id : number) {
    return await this.breakdownRepository.getBreakdown(id);
  }
}