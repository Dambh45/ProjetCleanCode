import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: DatabaseService) {}

  @Get()
  getHello(): string {
    return '';
  }
}
