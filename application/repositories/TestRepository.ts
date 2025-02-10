import { Test } from "../../domain/entities/Test";
import { Driver } from "../../domain/entities/Driver";
import { Bike } from "../../domain/entities/Bike";

export interface TestRepository {
  addTest(test: Test): Promise<void>;
  getTests(): Promise<Array<Test>>;
  getTest(id: number): Promise<Test | null>
  getDriverTests(driver: Driver): Promise<Array<Test>>;
  getBikeTests(bike: Bike): Promise<Array<Test>>;
  deleteTest(test: Test): Promise<void>
}