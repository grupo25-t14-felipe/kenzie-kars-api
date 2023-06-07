import { z } from "zod";
import { createUserSchema, userSchema } from "../schemas/user.schema";

type iUser = z.infer<typeof userSchema>;
type iUserReturn = z.infer<typeof createUserSchema>;

export { iUser, iUserReturn };
