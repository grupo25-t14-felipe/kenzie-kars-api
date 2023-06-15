import { z } from "zod";
import {
  announcementSchema,
  createAnnouncementSchema,
  updateAnnouncementSchema,
  updateAnnouncementSchemaReturn,
  returnAnnouncementSchemaAll,
} from "../schemas/announcement.schema";

type iAnnouncement = z.infer<typeof announcementSchema>;
type iAnnouncementReturn = z.infer<typeof createAnnouncementSchema>;
type iAnnouncementUpdate = z.infer<typeof updateAnnouncementSchema>;
type announcementUpdate = z.infer<typeof updateAnnouncementSchemaReturn>;
type iAnnouncementRetriveReturn = z.infer<typeof returnAnnouncementSchemaAll>;

export {
  iAnnouncement,
  iAnnouncementReturn,
  iAnnouncementUpdate,
  announcementUpdate,
  iAnnouncementRetriveReturn,
};
