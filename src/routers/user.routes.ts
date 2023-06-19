import { Router } from "express";
import { createUserController, retrieveUserController, updateUserController } from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { updateUserSchema, userSchema } from "../schemas/user.schema";
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

usersRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware( updateUserSchema ), 
  updateUserController
);

export { usersRoutes };
