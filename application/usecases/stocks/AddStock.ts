import { Part } from "../../../domain/entities/Part";
import { Stock } from "../../../domain/entities/Stock";
import { StockRepository } from "../../repositories/StockRepository";

export class AddStock {
  public constructor(
  private readonly stockRepository: StockRepository,
  ) {}
  
  public async execute(part: Part, quantity: number) {
    const stock = new Stock(part, quantity);

    await this.stockRepository.addStock(stock);
  }
}