import { GuaranteeRepository } from "../../repositories/GuaranteeRepository";

export class ListGuarantees {
  public constructor(
  private readonly guaranteeRepository: GuaranteeRepository,
  ) {}
  
  public async execute() {
    return await this.guaranteeRepository.getGuarantees();
  }
}