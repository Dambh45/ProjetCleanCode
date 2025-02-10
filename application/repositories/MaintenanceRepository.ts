import { Bike } from "../../domain/entities/Bike";
import { Maintenance } from "../../domain/entities/Maintenance";

export interface MaintenanceRepository {
  addMaintenance(maintenance: Maintenance): Promise<void>;
  getMaintenances(): Promise<Array<Maintenance>>;
  getMaintenance(id: number): Promise<Maintenance | null>;
  getBikeMaintenances(bike: Bike): Promise<Array<Maintenance>>;
  deleteMaintenance(maintenance: Maintenance): Promise<void>;
}