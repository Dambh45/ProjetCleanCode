import { Router } from "express";
import { ListParts } from "../../../../application/usecases/parts/ListParts";
import { AddPart } from "../../../../application/usecases/parts/AddPart";
import { GetPart } from "../../../../application/usecases/parts/GetPart";
import { DeletePart } from "../../../../application/usecases/parts/DeletePart";
import { PartRepository } from "../../../../application/repositories/PartRepository";

export const createPartsRouter = (partRepository: PartRepository) => {
    const partsRouter = Router();
  
    partsRouter.get("/", async (request, response) => {
      try {
        const listParts = new ListParts(partRepository);
        const parts = await listParts.execute();
  
        response.json(parts.map(part => {
          return {
            name: part.name,
            price: part.price,
          }
        }));
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    partsRouter.get("/:name", async (request, response) => {
      try {
        const part = new GetPart(partRepository).execute(request.params.name);  
        response.json(part);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    partsRouter.post("/", async (request, response) => {
      try {
        console.log(request);
        const { name, price } = request.body;
        const addPart = new AddPart(partRepository);
  
        await addPart.execute(name, price);
  
        response.status(201).end();
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    partsRouter.delete("/:name", async (request, response) => {
      try {
        const part = new DeletePart(partRepository).execute(request.params.name);  
        response.json(part);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    return partsRouter;
};