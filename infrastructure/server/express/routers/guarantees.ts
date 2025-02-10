import { Router } from "express";
import { ListGuarantees } from "../../../../application/usecases/guarantees/ListGuarantees";
import { AddGuarantee } from "../../../../application/usecases/guarantees/AddGuarantee";
import { GetGuarantee } from "../../../../application/usecases/guarantees/GetGuarantee";
import { DeleteGuarantee } from "../../../../application/usecases/guarantees/DeleteGuarantee";
import { GuaranteeRepository } from "../../../../application/repositories/GuaranteeRepository";

export const createGuaranteesRouter = (guaranteeRepository: GuaranteeRepository) => {
    const guaranteesRouter = Router();
  
    guaranteesRouter.get("/", async (request, response) => {
      try {
        const listGuarantees = new ListGuarantees(guaranteeRepository);
        const guarantees = await listGuarantees.execute();
  
        response.json(guarantees.map(guarantee => {
          return {
            id: guarantee.id,
            name: guarantee.name,
            description: guarantee.description,
            bike: guarantee.bike
          }
        }));
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    guaranteesRouter.get("/:id", async (request, response) => {
      try {
        const guarantee = new GetGuarantee(guaranteeRepository).execute(request.params.id);  
        response.json(guarantee);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    guaranteesRouter.post("/", async (request, response) => {
      try {
        console.log(request);
        const { name, description, bike } = request.body;
        const addGuarantee = new AddGuarantee(guaranteeRepository);
  
        await addGuarantee.execute(name, description, bike);
  
        response.status(201).end();
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    guaranteesRouter.delete("/:id", async (request, response) => {
      try {
        const guarantee = new DeleteGuarantee(guaranteeRepository).execute(request.params.id);  
        response.json(guarantee);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    return guaranteesRouter;
};