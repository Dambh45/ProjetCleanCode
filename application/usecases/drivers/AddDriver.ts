import { Driver } from "../../../domain/entities/Driver";
import { DriverRepository } from "../../repositories/DriverRepository";

export class AddDriver {
  public constructor(
  private readonly driverRepository: DriverRepository,
  ) {}
  
  public async execute(firstname: string, lastname: string, drivingLicenceNumber: number, drivingExperience: number) {
    const id = (await this.driverRepository.getDrivers()).length;
    const driver = new Driver(id, firstname, lastname, drivingLicenceNumber, drivingExperience, new Array());

    await this.driverRepository.addDriver(driver);
  }
}