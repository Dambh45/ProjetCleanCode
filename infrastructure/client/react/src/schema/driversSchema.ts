import { driverSchema } from "./driverSchema";
import { z } from "zod";

export const driversSchema = z.array(driverSchema);

export type Drivers = z.infer<typeof driversSchema>;