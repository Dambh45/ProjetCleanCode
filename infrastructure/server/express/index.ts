import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { database } from "../../repositories/sqlite";
import { createPartsRouter } from "./routers/parts";
import { createBikesRouter } from "./routers/bikes";
import { createBreakdownsRouter } from "./routers/breakdowns";
import { createGuaranteesRouter } from "./routers/guarantees";
import { createMaintenancesRouter } from "./routers/maintenances";
import { createOrdersRouter } from "./routers/orders";
import { createStocksRouter } from "./routers/stocks";

import { InMemoryPartRepository } from "../../repositories/in-memory/inMemoryPartRepository";
import { InMemoryBikeRepository } from "../../repositories/in-memory/inMemoryBikeRepository";
import { InMemoryBreakdownRepository } from "../../repositories/in-memory/inMemoryBreakdownRepository";
import { InMemoryGuaranteeRepository } from "../../repositories/in-memory/inMemoryGuaranteeRepository";
import { InMemoryMaintenanceRepository } from "../../repositories/in-memory/inMemoryMaintenanceRepository";
import { InMemoryOrderRepository } from "../../repositories/in-memory/inMemoryOrderRepository";
import { InMemoryStockRepository } from "../../repositories/in-memory/inMemoryStockRepository";
import { SqliteTestRepository } from "../../repositories/sqlite/sqliteTestRepository";
import { Part } from "../../../domain/entities/Part";

const main = async () => {
  const port = 8000;
  const host = "0.0.0.0";
  const server = express();

  const partRepository = new InMemoryPartRepository([]);
  const bikeRepository = new InMemoryBikeRepository([]);
  const breakdownRepository = new InMemoryBreakdownRepository([]);
  const guaranteeRepository = new InMemoryGuaranteeRepository([]);
  const maintenanceRepository = new InMemoryMaintenanceRepository([]);
  const orderRepository = new InMemoryOrderRepository([]);
  const stockRepository = new InMemoryStockRepository([]);
  const testRepository = new SqliteTestRepository(database);

  server.use(cors({ origin: "*" }));
  server.use(bodyParser.json());

  server.use("/parts", createPartsRouter(partRepository));
  server.use("/bikes", createBikesRouter(bikeRepository, breakdownRepository, guaranteeRepository, maintenanceRepository, testRepository));
  server.use("/breakdowns", createBreakdownsRouter(breakdownRepository));
  server.use("/guarantees", createGuaranteesRouter(guaranteeRepository));
  server.use("/maintenances", createMaintenancesRouter(maintenanceRepository));
  server.use("/orders", createOrdersRouter(orderRepository));
  server.use("/stocks", createStocksRouter(stockRepository));

  server.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
  });
};

main().catch(error => {
  console.error(`An error occurred: ${error}`);
});