import { z } from "zod";

const commentSchema = z.object({
  description: z.string(),
});

const createCommentSchema = commentSchema.extend({
  id: z.string(),
  createdAt: z.string(),
});

export { commentSchema, createCommentSchema };
