import { Driver } from "../../../domain/entities/Driver";
import { DriverRepository } from "../../repositories/DriverRepository";
import { IncidentRepository } from "../../repositories/IncidentRepository";
import { TestRepository } from "../../repositories/TestRepository";

export class DeleteDriver {
  public constructor(
  private readonly driverRepository: DriverRepository,
  private readonly testRepository: TestRepository,
  private readonly incidentRepository: IncidentRepository,
  ) {}
  
  public async execute(driver: Driver) {
    const driverTests = await this.testRepository.getDriverTests(driver);
    const driverIncidents = await this.incidentRepository.getDriverIncidents(driver);
    
    // Delete driver's test
    for (const test of driverTests) {
      await this.testRepository.deleteTest(test);
    }

    // Delete driver's incidents
    for (const incident of driverIncidents) {
      await this.incidentRepository.deleteIncident(incident);
    }

    await this.driverRepository.deleteDriver(driver);
  }
}