import { Router } from "express";
import { ListMaintenances } from "../../../../application/usecases/maintenances/ListMaintenances";
import { AddMaintenance } from "../../../../application/usecases/maintenances/AddMaintenances";
import { GetMaintenance } from "../../../../application/usecases/maintenances/GetMaintenance";
import { DeleteMaintenance } from "../../../../application/usecases/maintenances/DeleteMaintenance";
import { MaintenanceRepository } from "../../../../application/repositories/MaintenanceRepository";

export const createMaintenancesRouter = (maintenanceRepository: MaintenanceRepository) => {
    const maintenancesRouter = Router();
  
    maintenancesRouter.get("/", async (request, response) => {
      try {
        const listMaintenances = new ListMaintenances(maintenanceRepository);
        const maintenances = await listMaintenances.execute();
  
        response.json(maintenances.map(maintenance => {
          return {
            id: maintenance.id,
            name: maintenance.name,
            description: maintenance.description,
            bike: maintenance.bike,
            kilometer: maintenance.kilometer,
            price: maintenance.price
          }
        }));
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    maintenancesRouter.get("/:id", async (request, response) => {
      try {
        const maintenance = new GetMaintenance(maintenanceRepository).execute(request.params.id);  
        response.json(maintenance);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    maintenancesRouter.post("/", async (request, response) => {
      try {
        console.log(request);
        const { name, description, bike, kilometer, price } = request.body;
        const addMaintenance = new AddMaintenance(maintenanceRepository);
  
        await addMaintenance.execute(name, description, bike, kilometer, price);
  
        response.status(201).end();
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    maintenancesRouter.delete("/:id", async (request, response) => {
      try {
        const Maintenance = new DeleteMaintenance(maintenanceRepository).execute(request.params.id);  
        response.json(Maintenance);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    return maintenancesRouter;
};