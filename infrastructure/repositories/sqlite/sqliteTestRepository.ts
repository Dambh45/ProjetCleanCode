import { TestRepository } from "../../../application/repositories/TestRepository";
import { Bike } from "../../../domain/entities/Bike";
import { Driver } from "../../../domain/entities/Driver";
import { Test } from "../../../domain/entities/Test";
import { Database } from "./index";
import { testTable } from "./schema";
import { eq } from "drizzle-orm";

export class SqliteTestRepository implements TestRepository {
  public constructor(private readonly database: Database) {}

  public async addTest(incident: Test): Promise<void> {
  }

  public async getTests(): Promise<Array<Test>> {
    return new Array;
  }

  public async getTest(id: number): Promise<Test | null> {
    return null;
  }

  public async getDriverTests(driver: Driver): Promise<Array<Test>> {
    return new Array;
  }

  public async getBikeTests(bike: Bike): Promise<Array<Test>> {
    return new Array;
  }

  public async deleteTest(test: Test): Promise<void> {
    await this.database.delete(testTable).where(eq(testTable.id, test.id));
  }
}