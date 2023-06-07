import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import { iUser } from "../interfaces/user.interface";

const createUserController = async (req: Request, res: Response) => {
  const userData: iUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

export { createUserController };
