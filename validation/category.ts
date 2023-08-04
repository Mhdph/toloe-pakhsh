import {z} from 'zod';

export const addCategorySchema = z.object({
  name: z.string().min(2).max(50),
});

export const addChildCategorySchema = z.object({
  parentCategoryId: z.number().min(2),
  chaildCategoryId: z.number().min(2),
});
