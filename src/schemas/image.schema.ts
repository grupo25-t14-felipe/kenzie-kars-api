import { ZodLazy, z } from "zod";

const imageSchema = z.object({
  link: z.string(),
  userId: z.string(),
});

const createImageSchema = imageSchema.extend({
  id: z.string(),
});

export { imageSchema, createImageSchema };
