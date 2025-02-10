import { Router } from "express";
import { ListBreakdowns } from "../../../../application/usecases/breakdowns/ListBreakdown";
import { AddBreakdown } from "../../../../application/usecases/breakdowns/AddBreakdown";
import { GetBreakdown } from "../../../../application/usecases/breakdowns/GetBreakdown";
import { DeleteBreakdown } from "../../../../application/usecases/breakdowns/DeleteBreakdown";
import { BreakdownRepository } from "../../../../application/repositories/BreakdownRepository";
import { Bike } from "../../../../domain/entities/Bike";

export const createBreakdownsRouter = (breakdownRepository: BreakdownRepository) => {
    const breakdownsRouter = Router();
  
    breakdownsRouter.get("/", async (request, response) => {
      try {
        const listBreakdowns = new ListBreakdowns(breakdownRepository);
        const breakdowns = await listBreakdowns.execute();
  
        response.json(breakdowns.map(breakdown => {
          return {
            id: breakdown.id,
            reason: breakdown.reason,
            bike: breakdown.bike,
            costs: breakdown.costs
          }
        }));
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    breakdownsRouter.get("/:id", async (request, response) => {
      try {
        const breakdown = new GetBreakdown(breakdownRepository).execute(request.params.id);  
        response.json(breakdown);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    breakdownsRouter.post("/", async (request, response) => {
      try {
        console.log(request);
        const { reason, bike, costs } = request.body;
        const addBreakdown = new AddBreakdown(breakdownRepository);
  
        await addBreakdown.execute(reason, bike, costs);
  
        response.status(201).end();
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    breakdownsRouter.delete("/:id", async (request, response) => {
      try {
        const breakdown = new DeleteBreakdown(breakdownRepository).execute(request.params.id);  
        response.json(breakdown);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    return breakdownsRouter;
};