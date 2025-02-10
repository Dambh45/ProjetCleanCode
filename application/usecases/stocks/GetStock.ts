import { Part } from "../../../domain/entities/Part";
import { StockRepository } from "../../repositories/StockRepository";

export class GetStock {
  public constructor(
  private readonly stockRepository: StockRepository,
  ) {}
  
  public async execute(part : Part) {
    return await this.stockRepository.getStock(part);
  }
}