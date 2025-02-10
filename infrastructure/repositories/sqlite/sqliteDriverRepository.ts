import { DriverRepository } from "../../../application/repositories/DriverRepository";
import { Driver } from "../../../domain/entities/Driver";
import { Test } from "../../../domain/entities/Test";
import { Bike } from "../../../domain/entities/Bike";
import { Database } from "./index";
import { eq } from "drizzle-orm";
import { driverTable, testTable } from "./schema";

export class SqliteDriverRepository implements DriverRepository {
  public constructor(private readonly database: Database) {
    /*this.addDriver(
      new Driver(
        6,
        "Jean",
        "Test",
        1234567891011121,
        3,
        []
      )
    )*/
  }

  public async addDriver(driver: Driver): Promise<void> {
    await this.database.insert(driverTable).values({
      id: driver.id,
      firstname: driver.firstname,
      lastname: driver.lastname,
      drivingLicenceNumber: driver.drivingLicenceNumber,
      drivingExperience: driver.drivingExperience
    });
  }

  public async getDrivers(): Promise<Driver[]> {
    const driversWithTests = await this.database
      .select({
        driver: driverTable,
        test: testTable,
      })
      .from(driverTable)
      .leftJoin(testTable, eq(driverTable.id, testTable.driverId));

    const driverMap = new Map<number, Driver>();

    driversWithTests.forEach(({ driver, test }) => {
      if (!driverMap.has(driver.id)) {
        driverMap.set(
          driver.id,
          new Driver(
            driver.id,
            driver.firstname,
            driver.lastname,
            driver.drivingLicenceNumber,
            driver.drivingExperience,
            []
          )
        );
      }

      if (test) {
        /*driverMap.get(driver.id)!.tests.push(
          new Test(test.id, test.bikeId, driver, test.loanStartDate, test.loanEndDate)
        );*/
      }
    });

    return Array.from(driverMap.values());
  }

  public async getDriver(id: number): Promise<Driver | null> {
    const result = await this.database
      .select({
        driver: driverTable,
        test: testTable,
      })
      .from(driverTable)
      .leftJoin(testTable, eq(driverTable.id, testTable.driverId))
      .where(eq(driverTable.id, id));

    if (result.length === 0) {
      return null;
    }

    const driverData = result[0].driver;
    const driver = new Driver(
      driverData.id,
      driverData.firstname,
      driverData.lastname,
      driverData.drivingLicenceNumber,
      driverData.drivingExperience,
      []
    );

    /*result.forEach(({ test }) => {
      if (test) {
        driver.tests.push(
          new Test(
            test.id, 
            new Bike(test.bikeId, test), 
            new Driver(driver.id), 
            test.loanStartDate, 
            test.loanEndDate
          )
        );
      }
    });*/

    return driver;
  }

  public async deleteDriver(driver: Driver): Promise<void> {
    await this.database.delete(driverTable).where(eq(driverTable.id, driver.id));
  }
}