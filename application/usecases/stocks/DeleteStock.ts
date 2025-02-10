import { Stock } from "../../../domain/entities/Stock";
import { StockRepository } from "../../repositories/StockRepository";

export class DeleteStock {
  public constructor(
  private readonly stockRepository: StockRepository,
  ) {}
  
  public async execute(stock: Stock) {
    await this.stockRepository.deleteStock(stock);
  }
}