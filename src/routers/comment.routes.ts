import { Router } from "express";
import { commentSchema } from "../schemas/comment.schema";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createCommentController } from "../controllers/comments.controller";

const commentsRoutes = Router();

commentsRoutes.post(
  "/announcements/:adId/users/:userId",
  ensureDataIsValidMiddleware(commentSchema),
  createCommentController
);

export { commentsRoutes };
