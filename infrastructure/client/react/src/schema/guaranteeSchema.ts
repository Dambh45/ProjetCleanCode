import { z } from "zod";
import { bikeSchema } from "./bikeSchema";

export const guaranteeSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    bike: bikeSchema
});

export type Guarantee = z.infer<typeof guaranteeSchema>;