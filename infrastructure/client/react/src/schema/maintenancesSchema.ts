import { maintenanceSchema } from "./maintenanceSchema";
import { z } from "zod";

export const maintenancesSchema = z.array(maintenanceSchema);

export type Maintenances = z.infer<typeof maintenancesSchema>;