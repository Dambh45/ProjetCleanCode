import { Incident } from "../../../domain/entities/Incident";
import { IncidentRepository } from "../../repositories/IncidentRepository";

export class DeleteIncident {
  public constructor(
  private readonly incidentRepository: IncidentRepository,
  ) {}
  
  public async execute(incident: Incident) {
    await this.incidentRepository.deleteIncident(incident);
  }
}