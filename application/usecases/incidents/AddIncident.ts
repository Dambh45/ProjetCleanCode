import { Driver } from "../../../domain/entities/Driver";
import { Incident } from "../../../domain/entities/Incident";
import { IncidentRepository } from "../../repositories/IncidentRepository";

export class AddIncident {
  public constructor(
  private readonly incidentRepository: IncidentRepository,
  ) {}
  
  public async execute(type: string, description: string, driver: Driver) {
    const id = (await this.incidentRepository.getIncidents()).length;
    const incident = new Incident(id, type, description, driver);

    await this.incidentRepository.addIncident(incident);
  }
}