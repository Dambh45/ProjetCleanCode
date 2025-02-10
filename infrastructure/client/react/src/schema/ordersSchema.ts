import { orderSchema } from "./orderSchema";
import { z } from "zod";

export const ordersSchema = z.array(orderSchema);

export type Orders = z.infer<typeof ordersSchema>;