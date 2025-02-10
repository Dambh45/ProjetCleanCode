import { bikeSchema } from "./bikeSchema";
import { z } from "zod";

export const bikesSchema = z.array(bikeSchema);

export type Bikes = z.infer<typeof bikesSchema>;