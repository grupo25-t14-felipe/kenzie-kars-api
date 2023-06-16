import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import { iUser } from "../interfaces/user.interface";
import { RetrieveUserService } from "../services/users/retrieveUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: iUser = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const userId: string = req.params.id;

  const getUser = await RetrieveUserService(userId);

  return res.status(200).json(getUser);
};

export { createUserController, retrieveUserController };
