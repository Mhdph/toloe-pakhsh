import {z} from 'zod';

export const addCategorySchema = z.object({
  name: z.string().min(2).max(50),
});
