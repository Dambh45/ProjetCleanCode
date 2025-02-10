import { stockSchema } from "./stockSchema";
import { z } from "zod";

export const stocksSchema = z.array(stockSchema);

export type Stocks = z.infer<typeof stocksSchema>;