import { Request, Response } from "express";
import { createCommentService } from "../services/comment/createComment.service";

const createCommentController = async (req: Request, res: Response) => {
  const commentData = req.body.description;
  const adId = req.params.adId;
  const userId = req.params.userId;
  console.log(adId, userId, "8");

  const comment = await createCommentService(commentData, adId, userId);

  return res.status(201).json(comment);
};

export { createCommentController };
