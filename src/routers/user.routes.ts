import { Router } from "express";
import { createUserController, retrieveUserController } from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchema } from "../schemas/user.schema";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchema),
  createUserController
);

usersRoutes.get(
  "/:id", ensureUserExistsMiddleware, retrieveUserController
);

export { usersRoutes };
