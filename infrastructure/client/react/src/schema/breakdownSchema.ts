import { z } from "zod";
import { bikeSchema } from "./bikeSchema";

export const breakdownSchema = z.object({
    id: z.number(),
    reason: z.string(),
    bike: bikeSchema,
    costs: z.number()
});

export type Breakdown = z.infer<typeof breakdownSchema>;