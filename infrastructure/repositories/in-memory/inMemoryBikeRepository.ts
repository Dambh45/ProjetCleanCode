import { BikeRepository } from "../../../application/repositories/BikeRepository";
import { Bike } from "../../../domain/entities/Bike";
import { Part } from "../../../domain/entities/Part";

export class InMemoryBikeRepository implements BikeRepository {
  public constructor(private readonly bikes: Array<Bike>) {
    this.addBike(
      new Bike(
        1,
        "Triumph tiger 1200",
        21595,
        245,
        8768,
        1160,
        20,
        5.1,
        [new Part("injecteurs", 60)]
      )
    )
  }

  public async addBike(bike: Bike): Promise<void> {
    this.bikes.push(bike);
  }

  public async getBikes(): Promise<Bike[]> {
    return this.bikes;
  }

  public async getBike(id: number): Promise<Bike | null> {
    return this.bikes.filter(bike => bike.id == id)[0];
  }

  public async deleteBike(Bike: Bike): Promise<void> {
    const index = this.bikes.indexOf(Bike, 0);
    if (index > -1) {
        this.bikes.splice(index, 1);
    }
  }
}