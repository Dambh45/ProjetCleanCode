import { IncidentRepository } from "../../../application/repositories/IncidentRepository";
import { Incident } from "../../../domain/entities/Incident";
import { Database } from "./index";
import { eq } from "drizzle-orm";
import { driverTable, incidentTable } from "./schema";
import { Driver } from "../../../domain/entities/Driver";

export class SqliteIncidentRepository implements IncidentRepository {
  public constructor(private readonly database: Database) {
    /*this.addIncident(
      new Incident(
        2, 
        "exces",
        "Pris en excès de vitesse de 5km/h",
        new Driver(
          1,
          "Jean",
          "Test",
          1234567891011121,
          3,
          []
        )
      )
    );*/
  }

  public async addIncident(incident: Incident): Promise<void> {
    await this.database.insert(incidentTable).values({
      id: incident.id,
      type: incident.type,
      description: incident.description,
      driverId: incident.driver.id
    });
  }

  public async getIncidents(): Promise<Array<Incident | undefined>> {
    const incidentsWithDriver = await this.database
      .select({
        incident: incidentTable,
        driver: driverTable,
      })
      .from(incidentTable)
      .leftJoin(driverTable, eq(incidentTable.driverId, driverTable.id));

    const incidents = incidentsWithDriver.map(incident => {
      if (incident.driver != null) {
        console.log(incident.driver);
        return new Incident(
            incident.incident.id,
            incident.incident.type,
            incident.incident.description,
            new Driver(
              incident.driver.id,
              incident.driver.firstname,
              incident.driver.lastname,
              incident.driver.drivingLicenceNumber,
              incident.driver.drivingExperience,
                []
            )
        )
      }
    });

    return incidents == undefined ? [] : incidents
  }

  public async getIncident(id: number): Promise<Incident> {
    const result = await this.database
      .select({
        incident: incidentTable,
        driver: driverTable,
      })
      .from(incidentTable)
      .leftJoin(driverTable, eq(driverTable.id, incidentTable.driverId))
      .where(eq(incidentTable.id, id))[0];

    const incident = new Incident(
      result.incident.id,
      result.incident.type,
      result.incident.description,
      new Driver(
        result.driver[0].id,
        result.driver[0].firstname,
        result.driver[0].lastname,
        result.driver[0].drivingLicenceNumber,
        result.driver[0].drivingExperience,
        []
      )
    );

    return incident;
  }

  public async getDriverIncidents(driver: Driver): Promise<Array<Incident>> {
    return new Array;
  }

  public async deleteIncident(incident: Incident): Promise<void> {
    await this.database.delete(incidentTable).where(eq(incidentTable.id, incident.id));
  }
}