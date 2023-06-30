import z from "zod";
import { commentSchema, createCommentSchema } from "../schemas/comment.schema";

type iComment = z.infer<typeof commentSchema>;
type iCommentReturn = z.infer<typeof createCommentSchema>;

export { iComment, iCommentReturn };
