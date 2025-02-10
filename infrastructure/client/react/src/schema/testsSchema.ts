import { testSchema } from "./testSchema";
import { z } from "zod";

export const testsSchema = z.array(testSchema);

export type Tests = z.infer<typeof testsSchema>;