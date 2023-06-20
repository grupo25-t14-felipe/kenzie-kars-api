import { Router } from "express";
import { createImageController, deleteImageController, retrieveImageController, updateImageController } from "../controllers/image.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { imageSchema } from "../schemas/image.schema";

const imageRoutes = Router();

imageRoutes.post(
  "/", 
  ensureDataIsValidMiddleware( imageSchema ),
  createImageController
  );
imageRoutes.patch(
  "/:imageId", 
  ensureDataIsValidMiddleware( imageSchema ),
  updateImageController
);
imageRoutes.get(
  "/:id",
  retrieveImageController
)
imageRoutes.delete(
  "/:id",
  deleteImageController
)

export { imageRoutes }
