import { Guarantee } from "../../../domain/entities/Guarantee";
import { GuaranteeRepository } from "../../repositories/GuaranteeRepository";

export class DeleteGuarantee {
  public constructor(
  private readonly guaranteeRepository: GuaranteeRepository,
  ) {}
  
  public async execute(guarantee: Guarantee) {
    await this.guaranteeRepository.deleteGuarantee(guarantee);
  }
}