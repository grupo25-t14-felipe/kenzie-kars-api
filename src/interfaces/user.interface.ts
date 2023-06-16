import { z } from "zod";
import { UserAnnouncementsSchema, createUserSchema, userSchema } from "../schemas/user.schema";

type iUser = z.infer<typeof userSchema>;
type iUserReturn = z.infer<typeof createUserSchema>;
type iUserAnnouncements = z.infer<typeof UserAnnouncementsSchema>;

export { iUser, iUserReturn, iUserAnnouncements };
