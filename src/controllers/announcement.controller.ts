import { Request, Response } from "express";
import { createAnnouncementService } from "../services/announcement/createAnnouncement.service";
import { updateAnnouncementService } from "../services/announcement/updateAnnouncement.service";
import { iAnnouncementUpdate } from "../interfaces/announcement.interface";

const createAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;

  const announcementId = res.locals.id;

  const announcements = await createAnnouncementService(data, announcementId);

  return res.status(201).json(announcements);
};

const updateAnnouncementController = async (request: Request, response: Response): Promise<Response | void> => {
  const announcementData: iAnnouncementUpdate = request.body;
  const announcementId: number = parseInt(request.params.id);

  const newData = await updateAnnouncementService(announcementData, announcementId);

  response.status(200).json(newData);
};

export { createAnnouncementController, updateAnnouncementController };
