import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseService } from './app.service';
import { DriverController } from './driver/driver.controller';
import { IncidentController } from './incident/incident.controller';
import { TestController } from './test/test.controller';

@Module({
  imports: [],
  controllers: [AppController, DriverController, IncidentController, TestController],
  providers: [DatabaseService],
})
export class AppModule {}
