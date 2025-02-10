import { Bike } from "../../../domain/entities/Bike";
import { BreakdownRepository } from "../../repositories/BreakdownRepository";

export class GetBikeBreakdowns {
  public constructor(
  private readonly breakdownRepository: BreakdownRepository,
  ) {}
  
  public async execute(bike : Bike) {
    return await this.breakdownRepository.getBikeBreakdowns(bike);
  }
}