import { Bike } from "../../../domain/entities/Bike";
import { Part } from "../../../domain/entities/Part";
import { BikeRepository } from "../../repositories/BikeRepository";

export class AddBike {
  public constructor(
  private readonly bikeRepository: BikeRepository,
  ) {}
  
  public async execute(name: string, price: number, mass: number, cylinderCapacity: number, tankCapacity: number, consommation: number, parts: Array<Part>) {
    const id = (await this.bikeRepository.getBikes()).length;
    const bike = new Bike(id, name, price, mass, 0, cylinderCapacity, tankCapacity, consommation, parts);

    await this.bikeRepository.addBike(bike);
  }
}