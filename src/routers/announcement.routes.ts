import { Router } from "express";
import { ensureauthMiddleware } from "../middlewares/ensureAuthExists.middleware";
import {
  createAnnouncementController,
  updateAnnouncementController,
} from "../controllers/announcement.controller";
import ensureAnnouncementExistsMiddleware from "../middlewares/ensureAnnouncementExists.middleware";

const announcementRoutes = Router();

announcementRoutes.post("", ensureauthMiddleware, createAnnouncementController);
announcementRoutes.patch(
  "/:id",
  ensureauthMiddleware,
  ensureAnnouncementExistsMiddleware,
  updateAnnouncementController
);

export { announcementRoutes };
