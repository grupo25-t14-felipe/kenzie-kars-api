import { Router } from "express";
import { createImageController, retrieveImageController, updateImageController } from "../controllers/image.controller";

const imageRoutes = Router();

imageRoutes.post("/", createImageController);
imageRoutes.patch(
  "/:imageId", 
  updateImageController
);
imageRoutes.get(
  "/:id",
  retrieveImageController
)

export { imageRoutes }
