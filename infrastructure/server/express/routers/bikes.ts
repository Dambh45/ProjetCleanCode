import { Router } from "express";
import { ListBikes } from "../../../../application/usecases/bikes/ListBikes";
import { AddBike } from "../../../../application/usecases/bikes/AddBike";
import { GetBike } from "../../../../application/usecases/bikes/GetBike";
import { DeleteBike } from "../../../../application/usecases/bikes/DeleteBike";
import { BikeRepository } from "../../../../application/repositories/BikeRepository";
import { BreakdownRepository } from "../../../../application/repositories/BreakdownRepository";
import { GuaranteeRepository } from "../../../../application/repositories/GuaranteeRepository";
import { MaintenanceRepository } from "../../../../application/repositories/MaintenanceRepository";
import { TestRepository } from "../../../../application/repositories/TestRepository";

export const createBikesRouter = (bikeRepository: BikeRepository, breakdownRepository: BreakdownRepository, guaranteeRepository: GuaranteeRepository, maintenanceRepository: MaintenanceRepository, testRepository: TestRepository) => {
    const bikesRouter = Router();
  
    bikesRouter.get("/", async (request, response) => {
      try {
        const listBikes = new ListBikes(bikeRepository);
        const bikes = await listBikes.execute();
  
        response.json(bikes.map(bike => {
          return {
            id: bike.id,
            name: bike.name,
            price: bike.price,
            mass: bike.mass,
            kilometers: bike.kilometers,
            cylinderCapacity: bike.cylinderCapacity,
            tankCapacity: bike.tankCapacity,
            consommation: bike.consommation,
            parts: bike.parts
          }
        }));
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    bikesRouter.get("/:id", async (request, response) => {
      try {
        const bike = new GetBike(bikeRepository).execute(request.params.id);  
        response.json(bike);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    bikesRouter.post("/", async (request, response) => {
      try {
        console.log(request);
        const { name, price, mass, cylinderCapacity, tankCapacity, consommation, parts } = request.body;
        const addBike = new AddBike(bikeRepository);
  
        await addBike.execute(name, price, mass, cylinderCapacity, tankCapacity, consommation, parts);
  
        response.status(201).end();
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    bikesRouter.delete("/:id", async (request, response) => {
      try {
        const bike = new DeleteBike(bikeRepository, breakdownRepository, guaranteeRepository, maintenanceRepository, testRepository).execute(request.params.id);  
        response.json(bike);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    return bikesRouter;
};