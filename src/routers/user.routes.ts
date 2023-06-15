import { Router } from "express";
import { createUserController } from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchema } from "../schemas/user.schema";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);

export { usersRoutes };
