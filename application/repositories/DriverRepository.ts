import { Driver } from "../../domain/entities/Driver";

export interface DriverRepository {
  addDriver(driver: Driver): Promise<void>;
  getDrivers(): Promise<Array<Driver>>;
  getDriver(id: number): Promise<Driver | null>
  deleteDriver(driver: Driver): Promise<void>
}