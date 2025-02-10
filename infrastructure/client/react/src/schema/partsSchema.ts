import { partSchema } from "./partSchema";
import { z } from "zod";

export const partsSchema = z.array(partSchema);

export type Parts = z.infer<typeof partsSchema>;