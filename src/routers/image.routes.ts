import { Router } from "express";
import { createImageController, updateImageController } from "../controllers/image.controller";

const imageRoutes = Router();

imageRoutes.post("/", createImageController);
imageRoutes.patch(
  "/:imageId", 
  updateImageController
);

export { imageRoutes }
