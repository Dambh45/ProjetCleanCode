import { Bike } from "../../../domain/entities/Bike";
import { Maintenance } from "../../../domain/entities/Maintenance";
import { MaintenanceRepository } from "../../repositories/MaintenanceRepository";

export class AddMaintenance {
  public constructor(
  private readonly maintenanceRepository: MaintenanceRepository,
  ) {}
  
  public async execute(name: string, description: string, bike: Bike, kilometer: number, price: number) {
    const id = (await this.maintenanceRepository.getMaintenances()).length;
    const maintenance = new Maintenance(id, name, description, bike, kilometer, price);

    await this.maintenanceRepository.addMaintenance(maintenance);
  }
}