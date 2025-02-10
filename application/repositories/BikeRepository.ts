import { Bike } from "../../domain/entities/Bike";

export interface BikeRepository {
  addBike(bike: Bike): Promise<void>;
  getBikes(): Promise<Array<Bike>>;
  getBike(id: number): Promise<Bike | null>
  deleteBike(bike: Bike): Promise<void>
}