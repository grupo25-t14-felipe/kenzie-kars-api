import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/users.entity";
import { UserAnnouncementsSchema } from "../../schemas/user.schema";
import { iUserAnnouncements } from "../../interfaces/user.interface";

const RetrieveUserService = async (
  userId: string
): Promise<iUserAnnouncements> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      announcement: true,
      address: true
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  return user;
};

export { RetrieveUserService };
