import { Router } from "express";
import { ensureauthMiddleware } from "../middlewares/ensureAuthExists.middleware";
import { createAnnouncementController } from "../controllers/announcement.controller";

const announcementRoutes = Router();

announcementRoutes.post("", ensureauthMiddleware, createAnnouncementController);

export { announcementRoutes };
