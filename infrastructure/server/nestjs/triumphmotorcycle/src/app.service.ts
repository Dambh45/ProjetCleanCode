import { Injectable } from '@nestjs/common';
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { SqliteDriverRepository } from "../../../../repositories/sqlite/sqliteDriverRepository";
import { SqliteIncidentRepository } from "../../../../repositories/sqlite/sqliteIncidentRepository";
import { SqliteTestRepository } from "../../../../repositories/sqlite/sqliteTestRepository";


@Injectable()
export class DatabaseService {
  private database;
  private driverRepository: SqliteDriverRepository;
  private incidentRepository: SqliteIncidentRepository;
  private testRepository: SqliteTestRepository;

  getDatabase(): any {
    if (this.database == null) {
      const client = createClient({ url: "file:triumphmotorcycle.sqlite" });
      this.database = drizzle(client);
    }
    return this.database;
  }

  getDriverRepository(): SqliteDriverRepository {
    if (this.driverRepository == null) {
      this.driverRepository = new SqliteDriverRepository(this.getDatabase());
    }
    return this.driverRepository;
  }

  getIncidentRepository(): SqliteIncidentRepository {
    if (this.incidentRepository == null) {
      this.incidentRepository = new SqliteIncidentRepository(this.getDatabase());
    }
    return this.incidentRepository;
  }

  getTestRepository(): SqliteTestRepository {
    if (this.testRepository == null) {
      this.testRepository = new SqliteTestRepository(this.getDatabase());
    }
    return this.testRepository;
  }
}
