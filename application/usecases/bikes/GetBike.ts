import { BikeRepository } from "../../repositories/BikeRepository";

export class GetBike {
  public constructor(
  private readonly bikeRepository: BikeRepository,
  ) {}
  
  public async execute(id : number) {
    return await this.bikeRepository.getBike(id);
  }
}