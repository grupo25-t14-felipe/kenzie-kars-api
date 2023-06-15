import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { AppError } from "../../errors/AppError";
import { returnAnnouncementSchemaAll } from "../../schemas/announcement.schema";
import { iAnnouncementRetriveReturn } from "../../interfaces/announcement.interface";
import { User } from "../../entities/users.entity";

const RetrieveAnnouncementService = async (
  userId: string
): Promise<iAnnouncementRetriveReturn> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      announcement: true,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const announcements = returnAnnouncementSchemaAll.parse(user.announcement);

  return announcements;
};

export { RetrieveAnnouncementService };
