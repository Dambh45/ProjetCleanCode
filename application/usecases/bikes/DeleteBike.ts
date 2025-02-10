import { Bike } from "../../../domain/entities/Bike";
import { BikeRepository } from "../../repositories/BikeRepository";
import { BreakdownRepository } from "../../repositories/BreakdownRepository";
import { GuaranteeRepository } from "../../repositories/GuaranteeRepository";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";
import { TestRepository } from "../../repositories/TestRepository";

export class DeleteBike {
  public constructor(
  private readonly bikeRepository: BikeRepository,
  private readonly breakdownRepository: BreakdownRepository,
  private readonly guaranteeRepository: GuaranteeRepository,
  private readonly maintenanceRepository: MaintenanceRepository,
  private readonly testRepository: TestRepository,
  ) {}
  
  public async execute(bike: Bike) {
    const bikeBreakdowns = await this.breakdownRepository.getBikeBreakdowns(bike);
    const bikeGuarantees = await this.guaranteeRepository.getBikeGuarantees(bike);
    const bikeMaintenances = await this.maintenanceRepository.getBikeMaintenances(bike);
    const bikeTests = await this.testRepository.getBikeTests(bike);
    
    // Delete bike's breakdowns
    for (const breakdown of bikeBreakdowns) {
      await this.breakdownRepository.deleteBreakdown(breakdown);
    }

    // Delete bike's guarantees
    for (const guarantee of bikeGuarantees) {
      await this.guaranteeRepository.deleteGuarantee(guarantee);
    }

    // Delete bike's maintenances
    for (const maintenance of bikeMaintenances) {
      await this.maintenanceRepository.deleteMaintenance(maintenance);
    }

    // Delete bike's tests
    for (const test of bikeTests) {
      await this.testRepository.deleteTest(test);
    }

    await this.bikeRepository.deleteBike(bike);
  }
}