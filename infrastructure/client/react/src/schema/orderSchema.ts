import { z } from "zod";
import { partSchema } from "./partSchema";

export const orderSchema = z.object({
  id: z.number(),
  parts: z.array(
    partSchema
  ),
  costs: z.number(),
  deliveryDate: z.string()
});

export type Order = z.infer<typeof orderSchema>;