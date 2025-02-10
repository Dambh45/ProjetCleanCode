import { BikeRepository } from "../../repositories/BikeRepository";

export class ListBikes {
  public constructor(
  private readonly bikeRepository: BikeRepository,
  ) {}
  
  public async execute() {
    return await this.bikeRepository.getBikes();
  }
}