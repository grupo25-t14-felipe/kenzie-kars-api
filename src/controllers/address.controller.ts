import { Request, Response } from "express";
import { iAddressRequest } from "../interfaces/address.interface";
import { createAddressService } from "../services/address/createAddress.service";

const createAddressController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const data: iAddressRequest = req.body;

  const address = await createAddressService( userId, data );

  return res.status(201).json(address);
}

export { createAddressController };
