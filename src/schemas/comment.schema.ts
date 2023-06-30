import { z } from "zod";
import { createUserSchema } from "./user.schema";

const commentSchema = z.object({
  description: z.string(),
});

const createCommentSchema = commentSchema.extend({
  id: z.string(),
  createdAt: z.date(),
  user: createUserSchema
});

export { commentSchema, createCommentSchema };
