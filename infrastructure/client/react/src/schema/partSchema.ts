import { z } from "zod";

export const partSchema = z.object({
  name: z.string(),
  price: z.number(),
});

export type Part = z.infer<typeof partSchema>;