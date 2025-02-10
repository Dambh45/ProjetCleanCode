import { MaintenanceRepository } from "../../../application/repositories/MaintenanceRepository";
import { Bike } from "../../../domain/entities/Bike";
import { Maintenance } from "../../../domain/entities/Maintenance";
import { Part } from "../../../domain/entities/Part";

export class InMemoryMaintenanceRepository implements MaintenanceRepository {
  public constructor(private readonly maintenances: Array<Maintenance>) {
    this.addMaintenance(
      new Maintenance(
        1,
        "Vidange",
        "Changement huile",
        new Bike(
          1,
          "Triumph tiger 1200",
          21595,
          245,
          8768,
          1160,
          20,
          5.1,
          [new Part("injecteurs", 60)]
        ),
        5000,
        50
      )
    );
  }

  public async addMaintenance(maintenance: Maintenance): Promise<void> {
    this.maintenances.push(maintenance);
  }

  public async getMaintenances(): Promise<Maintenance[]> {
    return this.maintenances;
  }

  public async getMaintenance(id: number): Promise<Maintenance | null> {
    return this.maintenances.filter(maintenance => maintenance.id == id)[0];
  }

  public async getBikeMaintenances(bike: Bike): Promise<Array<Maintenance>> {
    return this.maintenances.filter(maintenance => maintenance.bike.id == bike.id);
  }

  public async deleteMaintenance(maintenance: Maintenance): Promise<void> {
    const index = this.maintenances.indexOf(maintenance, 0);
    if (index > -1) {
        this.maintenances.splice(index, 1);
    }
  }
}