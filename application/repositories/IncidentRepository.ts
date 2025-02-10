import { Driver } from "../../domain/entities/Driver";
import { Incident } from "../../domain/entities/Incident";

export interface IncidentRepository {
  addIncident(incident: Incident): Promise<void>;
  getIncidents(): Promise<Array<Incident | undefined>>;
  getIncident(id: number): Promise<Incident>
  getDriverIncidents(driver: Driver): Promise<Array<Incident>>;
  deleteIncident(incident: Incident): Promise<void>
}