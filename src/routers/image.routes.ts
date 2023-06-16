import { Router } from "express";
import { createImageController } from "../controllers/image.controller";

const imageRoutes = Router();

imageRoutes.post("/", createImageController);

export { imageRoutes }
