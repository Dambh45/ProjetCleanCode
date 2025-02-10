import { z } from "zod";
import { partsSchema } from "./partsSchema";

export const bikeSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    mass: z.number(),
    kilometers: z.number(),
    cylinderCapacity: z.number(),
    tankCapacity: z.number(),
    consommation: z.number(),
    parts: partsSchema
});

export type Bike = z.infer<typeof bikeSchema>;