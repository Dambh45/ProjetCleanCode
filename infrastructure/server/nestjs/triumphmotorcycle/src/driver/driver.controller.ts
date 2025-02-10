import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DatabaseService } from '../app.service';
import { Driver } from '../../../../../../domain/entities/Driver';
import { ListDrivers } from '../../../../../../application/usecases/drivers/ListDrivers'
import { GetDriver } from '../../../../../../application/usecases/drivers/GetDriver'
import { AddDriver } from '../../../../../../application/usecases/drivers/AddDriver'
import { DeleteDriver } from '../../../../../../application/usecases/drivers/DeleteDriver'


@Controller('drivers')
export class DriverController {
  constructor(private readonly database: DatabaseService) {}

  @Get()
  getDrivers(): Promise<Array<Driver>> {
    const drivers = new ListDrivers(this.database.getDriverRepository()).execute();
    return drivers;
  }

  @Get(':id')
  getDriver(@Param() params: any): Promise<Driver | null> {
    const driver = new GetDriver(this.database.getDriverRepository()).execute(params.id);
    return driver;
  }

  @Post()
  addDriver(): void {}

  @Delete(':id')
  deleteDriver(@Param() params: any): void {
    new DeleteDriver(this.database.getDriverRepository(), this.database.getTestRepository(), this.database.getIncidentRepository()).execute(params.id);
  }
}
