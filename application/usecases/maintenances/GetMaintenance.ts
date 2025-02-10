import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class GetMaintenance {
  public constructor(
  private readonly maintenanceRepository: MaintenanceRepository,
  ) {}
  
  public async execute(id : number) {
    return await this.maintenanceRepository.getMaintenance(id);
  }
}