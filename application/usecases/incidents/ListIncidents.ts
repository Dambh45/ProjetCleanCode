import { IncidentRepository } from "../../repositories/IncidentRepository";

export class ListIncidents {
  public constructor(
  private readonly incidentRepository: IncidentRepository,
  ) {}
  
  public async execute() {
    return await this.incidentRepository.getIncidents();
  }
}