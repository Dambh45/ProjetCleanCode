import { Bike } from "../../../domain/entities/Bike";
import { GuaranteeRepository } from "../../repositories/GuaranteeRepository";

export class GetBikeGuarantees {
  public constructor(
  private readonly guaranteeRepository: GuaranteeRepository,
  ) {}
  
  public async execute(bike : Bike) {
    return await this.guaranteeRepository.getBikeGuarantees(bike);
  }
}