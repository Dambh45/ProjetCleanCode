import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DatabaseService } from '../app.service';
import { Test } from '../../../../../../domain/entities/Test';
import { ListTests } from '../../../../../../application/usecases/tests/ListTests'
import { GetTest } from '../../../../../../application/usecases/tests/GetTest'
import { GetDriverTests } from '../../../../../../application/usecases/tests/GetDriverTests'
import { AddTest } from '../../../../../../application/usecases/tests/AddTest'
import { DeleteTest } from '../../../../../../application/usecases/tests/DeleteTest'

@Controller('tests')
export class TestController {
  constructor(private readonly database: DatabaseService) {}
  @Get()
  getTests(): Promise<Array<Test>> {
    const tests = new ListTests(this.database.getTestRepository()).execute();
    return tests;
  }
  
  @Get(':id')
  getTest(@Param() params: any): Promise<Test | null> {
    const test = new GetTest(this.database.getTestRepository()).execute(params.id);
    return test;
  }
  
  @Get('driver/:id')
  getDriverTests(@Param() params: any): Promise<Array<Test>> {
    const tests = new GetDriverTests(this.database.getTestRepository()).execute(params.id);
    return tests;
  }
  
  @Get('bike/:id')
  getBikeTests(@Param() params: any): Promise<Array<Test>> {
    const incidents = new GetDriverTests(this.database.getTestRepository()).execute(params.id);
    return incidents;
  }
  
  @Post()
  addTest(test: Test): void {}
  
  @Delete(':id')
  deleteTest(@Param() params: any): void {
    new DeleteTest(this.database.getTestRepository()).execute(params.id);
  }
}
