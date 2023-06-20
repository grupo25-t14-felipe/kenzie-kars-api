import { Request, Response } from "express";
import { iAddressRequest, iAddressUpdate } from "../interfaces/address.interface";
import { createAddressService } from "../services/address/createAddress.service";
import { updateAddressService } from "../services/address/updateAddress.service";

const createAddressController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const data: iAddressRequest = req.body;

  const address = await createAddressService( userId, data );

  return res.status(201).json(address);
}

const updateAddressController = async (req: Request, res: Response ) => {
  const addressId: string = req.params.addressId;
  const data: iAddressUpdate = req.body;

  const updatedData = await updateAddressService( addressId, data );

  return res.status(200).json(updatedData)
}

export { 
  createAddressController,
  updateAddressController
};
