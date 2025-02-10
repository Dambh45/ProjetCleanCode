import { DriverRepository } from "../../repositories/DriverRepository";

export class ListDrivers {
  public constructor(
  private readonly driverRepository: DriverRepository,
  ) {}
  
  public async execute() {
    return await this.driverRepository.getDrivers();
  }
}