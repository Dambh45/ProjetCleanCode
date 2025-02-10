import { Bike } from "../../../domain/entities/Bike";
import { Guarantee } from "../../../domain/entities/Guarantee";
import { GuaranteeRepository } from "../../repositories/GuaranteeRepository";

export class AddGuarantee {
  public constructor(
  private readonly guaranteeRepository: GuaranteeRepository,
  ) {}
  
  public async execute(name: string, description: string, bike: Bike) {
    const id = (await this.guaranteeRepository.getGuarantees()).length;
    const guarantee = new Guarantee(id, name, description, bike);

    await this.guaranteeRepository.addGuarantee(guarantee);
  }
}