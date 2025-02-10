import { incidentSchema } from "./incidentSchema";
import { z } from "zod";

export const incidentsSchema = z.array(incidentSchema);

export type Incidents = z.infer<typeof incidentsSchema>;