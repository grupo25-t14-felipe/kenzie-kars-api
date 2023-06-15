import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { returnAnnouncementSchemaAll } from "../../schemas/announcement.schema";
import { iAnnouncementRetriveReturn } from "../../interfaces/announcement.interface";

const listAnnouncementService =
  async (): Promise<iAnnouncementRetriveReturn> => {
    const announcementRepository: Repository<Announcement> =
      AppDataSource.getRepository(Announcement);

    const listAnnouncement: Array<Announcement> =
      await announcementRepository.find();

    const announcements = returnAnnouncementSchemaAll.parse(listAnnouncement);

    return announcements;
  };

export { listAnnouncementService };
