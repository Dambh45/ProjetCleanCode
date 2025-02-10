import { z } from "zod";
import { driverSchema } from "./driverSchema";

export const incidentSchema = z.object({
    id: z.number(),
    type: z.string(),
    description: z.string(),
    driver: driverSchema,
});

export type Incident = z.infer<typeof incidentSchema>;