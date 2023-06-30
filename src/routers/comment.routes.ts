import { Router } from "express";
import { commentSchema } from "../schemas/comment.schema";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createCommentController } from "../controllers/comments.controller";
import { ensureauthMiddleware } from "../middlewares/ensureAuthExists.middleware";

const commentsRoutes = Router();

commentsRoutes.post(
  "/announcements/:adId/users/",
  ensureDataIsValidMiddleware(commentSchema),
  ensureauthMiddleware,
  createCommentController
);

export { commentsRoutes };
