import { Router } from "express";
import { createAddressController, retrieveAddressController, updateAddressController } from "../controllers/address.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { addressRequestSchema, addressUpdateSchema } from "../schemas/address.schema";

const addressRoutes = Router();

addressRoutes.post(
  '', 
  ensureDataIsValidMiddleware(addressRequestSchema), 
  createAddressController
);

addressRoutes.patch(
  '/:addressId',
  ensureDataIsValidMiddleware( addressUpdateSchema ),
  updateAddressController
)

addressRoutes.get(
  '/:addressId',
  retrieveAddressController
)

export { addressRoutes }
