import { z } from "zod";
import {
  announcementSchema,
  createAnnouncementSchema,
  updateAnnouncementSchema,
  updateAnnouncementSchemaReturn,
} from "../schemas/announcement.schema";

type iAnnouncement = z.infer<typeof announcementSchema>;
type iAnnouncementReturn = z.infer<typeof createAnnouncementSchema>;
type iAnnouncementUpdate = z.infer<typeof updateAnnouncementSchema>;
type announcementUpdate = z.infer<typeof updateAnnouncementSchemaReturn>;

export {
  iAnnouncement,
  iAnnouncementReturn,
  iAnnouncementUpdate,
  announcementUpdate,
};
