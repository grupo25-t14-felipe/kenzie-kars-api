import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import { iUser, iUserUpdate } from "../interfaces/user.interface";
import { RetrieveUserService } from "../services/users/retrieveUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";

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

const updateUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const body: iUserUpdate = req.body;

  const updatedUser = await updateUserService( userId, body );

  return res.status(200).json( updatedUser );
}

const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = req.params.id;

  const deletedUser = await deleteUserService( userId )

  return res.status(204).json(deletedUser);
}

export { 
  createUserController, 
  retrieveUserController, 
  updateUserController,
  deleteUserController
};
