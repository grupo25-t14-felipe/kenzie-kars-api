import { z } from "zod";
import {
  announcementSchema,
  createAnnouncementSchema,
} from "../schemas/announcement.schema";

type iAnnouncement = z.infer<typeof announcementSchema>;
type iAnnouncementReturn = z.infer<typeof createAnnouncementSchema>;

export {
    iAnnouncement,
    iAnnouncementReturn
}
