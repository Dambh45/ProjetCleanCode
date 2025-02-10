import { StockRepository } from "../../repositories/StockRepository";

export class ListStocks {
  public constructor(
  private readonly stockRepository: StockRepository,
  ) {}
  
  public async execute() {
    return await this.stockRepository.getStocks();
  }
}