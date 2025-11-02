import z from 'zod';

export const productSchema = z.object({});

export type FormProductFields = z.infer<typeof productSchema>;
