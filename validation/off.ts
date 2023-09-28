import {z} from 'zod';

export const AddOffSchema = z.object({
  name: z.string().min(2).max(50),
  percentage: z.number().min(1).max(99),
  password: z.string().min(2).max(50),
  category: z.string().min(2).max(50),
});
