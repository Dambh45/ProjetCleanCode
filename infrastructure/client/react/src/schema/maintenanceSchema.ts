import { z } from "zod";
import { bikeSchema } from "./bikeSchema";

export const maintenanceSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    bike: bikeSchema,
    kilometer: z.number(),
    price: z.number(),
});

export type Maintenance = z.infer<typeof maintenanceSchema>;