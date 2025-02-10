import { z } from "zod";

export const driverSchema = z.object({
    id: z.number(),
    firstname: z.string(),
    lastname: z.string(),
    drivingLicenceNumber: z.number(),
    drivingExperience: z.number(),
});

export type Driver = z.infer<typeof driverSchema>;