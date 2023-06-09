import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

const deleteAnnouncementService = async (
  announcementId: number
): Promise<void> => {
  const announcementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.findOne({
    where: {
      id: announcementId,
    },
  });

  await announcementRepository.softRemove(announcement!);
};

export { deleteAnnouncementService };
