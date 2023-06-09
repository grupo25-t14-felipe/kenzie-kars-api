import { Request, Response } from "express";
import { createAnnouncementService } from "../services/announcement/createAnnouncement.service";
import { updateAnnouncementService } from "../services/announcement/updateAnnouncement.service";
import {
  iAnnouncementRetriveReturn,
  iAnnouncementUpdate,
} from "../interfaces/announcement.interface";
import { retrieveAnnouncementService } from "../services/announcement/retrieveAnnouncement.service";
import { deleteAnnouncementService } from "../services/announcement/deleteAnnouncement.service";

const createAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;

  const announcementId = res.locals.id;

  const announcements = await createAnnouncementService(data, announcementId);

  return res.status(201).json(announcements);
};

const updateAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const announcementData: iAnnouncementUpdate = req.body;
  const announcementId: number = parseInt(req.params.id);

  const newData = await updateAnnouncementService(
    announcementData,
    announcementId
  );

  return res.status(200).json(newData);
};

const retrieveAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const getAnnouncement: iAnnouncementRetriveReturn =
    await retrieveAnnouncementService();

  return res.status(200).json(getAnnouncement);
};

const deleteAnnouncementController = async (
  request: Request,
  response: Response
): Promise<Response | void> => {
  const announcementId: number = parseInt(request.params.id);

  await deleteAnnouncementService(announcementId);

  response.status(204).send();
};

export {
  createAnnouncementController,
  updateAnnouncementController,
  retrieveAnnouncementController,
  deleteAnnouncementController,
};
