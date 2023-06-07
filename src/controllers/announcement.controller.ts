import { Request, Response } from "express";
import { createAnnouncementService } from "../services/announcement/createAnnouncement.service";

const createAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data = req.body;

  const announcementId = res.locals.id;

  const announcements = await createAnnouncementService(data, announcementId);

  return res.status(201).json(announcements);
};

export { createAnnouncementController };
