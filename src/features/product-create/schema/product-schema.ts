import z from 'zod';

export const productSchema = z.object({
  'product-name': z
    .string()
    .nonempty({ error: 'Required to fill' })
    .refine((val) => /^[A-Z]/.test(val), {
      error: 'the first letter must be capitalized',
    }),
  species: z.string().nonempty({ error: 'Required to fill' }),
  type: z.string().nonempty({ error: 'Required to fill' }),
  location: z.string().nonempty({ error: 'Required to fill' }),
  image: z
    .instanceof(File)
    .refine((val) => val.type.match(/png|jpeg/), {
      error: 'file extension must be png or jpeg',
    })
    .refine((val) => val.size <= 2 * 1024 * 1024, {
      error: 'the file size must not exceed 2MB',
    }),
  status: z.enum(['Alive', 'Dead', 'unknown']),
  gender: z.enum(['unknown', 'Female', 'Male', 'Genderless']),
});

export type FormProductFields = z.infer<typeof productSchema>;
