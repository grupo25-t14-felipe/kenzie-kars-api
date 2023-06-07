import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import {
  iAnnouncementUpdate,
  announcementUpdate,
} from "../../interfaces/announcement.interface";
import {
  updateAnnouncementSchema,
  updateAnnouncementSchemaReturn,
} from "../../schemas/announcement.schema";

const updateAnnouncementService = async (
  announcementData: iAnnouncementUpdate,
  announcementId: any
): Promise<announcementUpdate> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const oldData: any =
    await announcementRepository.findOneBy({
      id: announcementId,
    });

  const announcement = announcementRepository.create({
    ...oldData,
    ...announcementData,
  });

  await announcementRepository.save(announcement);

  const newAnnouncement: announcementUpdate = updateAnnouncementSchemaReturn.parse(announcement);

  return newAnnouncement;
};

export { updateAnnouncementService };
