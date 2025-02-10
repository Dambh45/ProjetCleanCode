import { guaranteeSchema } from "./guaranteeSchema";
import { z } from "zod";

export const guaranteesSchema = z.array(guaranteeSchema);

export type Guarantees = z.infer<typeof guaranteesSchema>;