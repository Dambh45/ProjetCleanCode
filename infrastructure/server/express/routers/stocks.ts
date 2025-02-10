import { Router } from "express";
import { ListStocks } from "../../../../application/usecases/stocks/ListStocks";
import { AddStock } from "../../../../application/usecases/stocks/AddStock";
import { GetStock } from "../../../../application/usecases/stocks/GetStock";
import { DeleteStock } from "../../../../application/usecases/stocks/DeleteStock";
import { StockRepository } from "../../../../application/repositories/StockRepository";

export const createStocksRouter = (stockRepository: StockRepository) => {
    const stocksRouter = Router();
  
    stocksRouter.get("/", async (request, response) => {
      try {
        const listStocks = new ListStocks(stockRepository);
        const stocks = await listStocks.execute();
  
        response.json(stocks.map(stock => {
          return {
            part: stock.part,
            quantity: stock.quantity,
          }
        }));
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    stocksRouter.get("/:id", async (request, response) => {
      try {
        const stock = new GetStock(stockRepository).execute(request.params.id);  
        response.json(stock);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    stocksRouter.post("/", async (request, response) => {
      try {
        console.log(request);
        const { name, price } = request.body;
        const addStock = new AddStock(stockRepository);
  
        await addStock.execute(name, price);
  
        response.status(201).end();
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });

    stocksRouter.delete("/:id", async (request, response) => {
      try {
        const stock = new DeleteStock(stockRepository).execute(request.params.id);  
        response.json(stock);
      } catch (error) {
        response.status(500).json({
          error: String(error)
        });
      }
    });
  
    return stocksRouter;
};