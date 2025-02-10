import { IncidentRepository } from "../../repositories/IncidentRepository";

export class GetIncident {
  public constructor(
  private readonly incidentRepository: IncidentRepository,
  ) {}
  
  public async execute(id : number) {
    return await this.incidentRepository.getIncident(id);
  }
}