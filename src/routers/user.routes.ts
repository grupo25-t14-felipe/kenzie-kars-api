import { Router } from "express";
import { createUserController } from "../controllers/user.controller";

const usersRoutes = Router();

usersRoutes.post("", createUserController);

export { usersRoutes };
