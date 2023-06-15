import { Router } from "express";
import { ensureauthMiddleware } from "../middlewares/ensureAuthExists.middleware";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAnnouncementController,
  retrieveAnnouncementController,
  updateAnnouncementController,
} from "../controllers/announcement.controller";
import ensureAnnouncementExistsMiddleware from "../middlewares/ensureAnnouncementExists.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  announcementSchema,
  updateAnnouncementSchema,
} from "../schemas/announcement.schema";

const announcementRoutes = Router();

announcementRoutes.post(
  "",
  ensureDataIsValidMiddleware(announcementSchema),
  ensureauthMiddleware,
  createAnnouncementController
);
announcementRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(updateAnnouncementSchema),
  ensureAnnouncementExistsMiddleware,
  updateAnnouncementController
);
announcementRoutes.get("", listAnnouncementController);
announcementRoutes.get("/:id", retrieveAnnouncementController);
announcementRoutes.delete(
  "/:id",
  ensureAnnouncementExistsMiddleware,
  deleteAnnouncementController
);

export { announcementRoutes };
