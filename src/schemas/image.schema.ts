import { z } from "zod";

const imageSchema = z.object({
  link: z.string()
});

const createImageSchema = imageSchema.extend({
  id: z.string(),
  // userId: z.string(),
});

export { imageSchema, createImageSchema };
