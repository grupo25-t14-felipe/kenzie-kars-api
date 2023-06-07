import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  email: z.string(),
  password: z.string(),
  telephone: z.string(),
  date_of_birth: z.string(),
  description: z.string(),
  buyer: z.boolean(),
});

const createUserSchema = userSchema
  .extend({
    id: z.string(),
    createdAt: z.string(),
  })
  .omit({
    password: true,
  });

export { userSchema, createUserSchema };
