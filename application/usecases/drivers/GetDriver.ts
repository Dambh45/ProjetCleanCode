import { DriverRepository } from "../../repositories/DriverRepository";

export class GetDriver {
  public constructor(
  private readonly driverRepository: DriverRepository,
  ) {}
  
  public async execute(id : number) {
    return await this.driverRepository.getDriver(id);
  }
}