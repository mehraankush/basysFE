import * as z from 'zod';

export const authorizationRequestSchema = z.object({
    treatment: z.string().min(1, "Treatment is required"),
    doctorNotes: z.string().optional(),
    dateOfService: z.string().min(1, "Date of service is required"),
    insurancePlan: z.string().optional(),
    diagnosisCode: z.string().optional(),
})