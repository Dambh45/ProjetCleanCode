import { Bike } from "../../../domain/entities/Bike";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class GetBikeMaintenances {
  public constructor(
  private readonly maintenanceRepository: MaintenanceRepository,
  ) {}
  
  public async execute(bike : Bike) {
    return await this.maintenanceRepository.getBikeMaintenances(bike);
  }
}