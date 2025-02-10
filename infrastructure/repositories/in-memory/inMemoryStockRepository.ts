import { StockRepository } from "../../../application/repositories/StockRepository";
import { Part } from "../../../domain/entities/Part";
import { Stock } from "../../../domain/entities/Stock";

export class InMemoryStockRepository implements StockRepository {
  public constructor(private readonly stocks: Array<Stock>) {
    this.addStock(
      new Stock(
        new Part("injecteurs", 60),
        3
      )
    )
  }

  public async addStock(stock: Stock): Promise<void> {
    this.stocks.push(stock);
  }

  public async getStocks(): Promise<Stock[]> {
    return this.stocks;
  }

  public async getStock(part: Part): Promise<Stock | null> {
    return this.stocks.filter(stock => stock.part.name == part.name)[0];
  }

  public async deleteStock(Stock: Stock): Promise<void> {
    const index = this.stocks.indexOf(Stock, 0);
    if (index > -1) {
        this.stocks.splice(index, 1);
    }
  }
}