import { z } from "zod";
import { partSchema } from "./partSchema";

export const stockSchema = z.object({
  part: partSchema,
  quantity: z.number()
});

export type Stock = z.infer<typeof stockSchema>;