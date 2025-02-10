import { Bike } from "../../../domain/entities/Bike";
import { Breakdown } from "../../../domain/entities/Breakdown";
import { BreakdownRepository } from "../../repositories/BreakdownRepository";

export class AddBreakdown {
  public constructor(
  private readonly breakdownRepository: BreakdownRepository,
  ) {}
  
  public async execute(reason: string, bike: Bike, costs: number) {
    const id = (await this.breakdownRepository.getBreakdowns()).length;
    const breakdown = new Breakdown(id , reason, bike, costs);

    await this.breakdownRepository.addBreakdown(breakdown);
  }
}