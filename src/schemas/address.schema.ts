import { z } from "zod";
import { userSchema } from "./user.schema";

const addressRequestSchema = z.object({
  cep: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string(),
});

const addressResponseSchema = addressRequestSchema.merge( z.object({
  id: z.string(),
  user: userSchema
}))

export {
  addressRequestSchema,
  addressResponseSchema
}
