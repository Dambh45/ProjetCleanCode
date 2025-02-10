import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DatabaseService } from '../app.service';
import { Incident } from '../../../../../../domain/entities/Incident';
import { ListIncidents } from '../../../../../../application/usecases/incidents/ListIncidents'
import { GetIncident } from '../../../../../../application/usecases/incidents/GetIncident'
import { GetDriverIncidents } from '../../../../../../application/usecases/incidents/GetDriverIncidents'
import { AddIncident } from '../../../../../../application/usecases/incidents/AddIncident'
import { DeleteIncident } from '../../../../../../application/usecases/incidents/DeleteIncident'

@Controller('incidents')
export class IncidentController {
  constructor(private readonly database: DatabaseService) {}

  @Get()
  getIncidents(): Promise<Array<Incident | undefined>> {
    const incidents = new ListIncidents(this.database.getIncidentRepository()).execute();
    return incidents;
  }

  @Get(':id')
  getIncident(@Param() params: any): Promise<Incident | null> {
    const incident = new GetIncident(this.database.getIncidentRepository()).execute(params.id);
    return incident;
  }

  @Get('driver/:id')
  getDriverIncidents(@Param() params: any): Promise<Array<Incident>> {
    const incidents = new GetDriverIncidents(this.database.getIncidentRepository()).execute(params.id);
    return incidents;
  }

  @Post()
  addIncident(incident: Incident): void {}

  @Delete(':id')
  deleteIncident(@Param() params: any): void {
    new DeleteIncident(this.database.getIncidentRepository()).execute(params.id);
  }
}
