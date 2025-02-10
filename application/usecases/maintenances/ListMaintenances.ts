import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class ListMaintenances {
  public constructor(
  private readonly maintenanceRepository: MaintenanceRepository,
  ) {}
  
  public async execute() {
    return await this.maintenanceRepository.getMaintenances();
  }
}