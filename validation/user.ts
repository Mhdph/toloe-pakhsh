import {z} from 'zod';

export const userSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  nationalCode: z.string().optional(),
  email: z.string().optional(),
  birthDate: z.string().optional(),
  phone: z.string(),
  address: z.string(),
  zipCode: z.string().optional(),
  city: z.string(),
  favorite: z.array(z.string()).optional(),
});
