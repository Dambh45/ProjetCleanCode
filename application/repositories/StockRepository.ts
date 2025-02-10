import { Part } from "../../domain/entities/Part";
import { Stock } from "../../domain/entities/Stock";

export interface StockRepository {
  addStock(Stock: Stock): Promise<void>;
  getStocks(): Promise<Array<Stock>>;
  getStock(part: Part): Promise<Stock | null>
  deleteStock(stock: Stock): Promise<void>
}