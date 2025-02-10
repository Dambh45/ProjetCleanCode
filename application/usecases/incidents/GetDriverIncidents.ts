import { Driver } from "../../../domain/entities/Driver";
import { IncidentRepository } from "../../repositories/IncidentRepository";

export class GetDriverIncidents {
  public constructor(
  private readonly incidentRepository: IncidentRepository,
  ) {}
  
  public async execute(driver : Driver) {
    return await this.incidentRepository.getDriverIncidents(driver);
  }
}