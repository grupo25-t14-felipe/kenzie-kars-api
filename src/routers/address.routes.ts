import { Router } from "express";
import { createAddressController } from "../controllers/address.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { addressRequestSchema } from "../schemas/address.schema";

const addressRoutes = Router();

addressRoutes.post(
  '', 
  ensureDataIsValidMiddleware(addressRequestSchema), 
  createAddressController
);

export { addressRoutes }
