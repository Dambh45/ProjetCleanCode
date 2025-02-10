import { Maintenance } from "../../../domain/entities/Maintenance";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class DeleteMaintenance {
  public constructor(
  private readonly maintenanceRepository: MaintenanceRepository,
  ) {}
  
  public async execute(maintenance: Maintenance) {
    await this.maintenanceRepository.deleteMaintenance(maintenance);
  }
}