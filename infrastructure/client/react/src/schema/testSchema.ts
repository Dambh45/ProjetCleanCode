import { z } from "zod";
import { bikeSchema } from "./bikeSchema";
import { driverSchema } from "./driverSchema";

export const testSchema = z.object({
  id: z.number(),
  bike: bikeSchema,
  driver: driverSchema,
  loanStartDate: z.date(),
  loanEndDate: z.date()
});

export type Test = z.infer<typeof testSchema>;