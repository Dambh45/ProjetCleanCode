import { breakdownSchema } from "./breakdownSchema";
import { z } from "zod";

export const breakdownsSchema = z.array(breakdownSchema);

export type Breakdowns = z.infer<typeof breakdownsSchema>;