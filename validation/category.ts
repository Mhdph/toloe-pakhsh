import {z} from 'zod';

export const addCategorySchema = z.object({
  name: z.string().min(2).max(50),
});

export const addChildCategorySchema = z.object({
  parentCategoryId: z.string().min(1),
  chaildCategoryId: z.string().min(1),
});
