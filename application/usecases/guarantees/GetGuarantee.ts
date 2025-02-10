import { GuaranteeRepository } from "../../repositories/GuaranteeRepository";

export class GetGuarantee {
  public constructor(
  private readonly guaranteeRepository: GuaranteeRepository,
  ) {}
  
  public async execute(id : number) {
    return await this.guaranteeRepository.getGuarantee(id);
  }
}