import { z } from "zod";
import { createUserSchema } from "./user.schema";
import { createImageSchema } from "./image.schema";

const announcementSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
  mileage: z.string(),
  color: z.string(),
  price_table_fipe: z.string(),
  price: z.string(),
  description: z.string(),
  published: z.boolean(),
  cover_image: z.string(),
});

const createAnnouncementSchema = announcementSchema.extend({
  id: z.string(),
  createdAt: z.string(),
});

const updateAnnouncementSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.string().optional(),
  fuel: z.string().optional(),
  mileage: z.string().optional(),
  color: z.string().optional(),
  price_table_fipe: z.string().optional(),
  price: z.string().optional(),
  description: z.string().optional(),
  published: z.boolean().optional(),
  cover_image: z.string().optional(),
});

const updateAnnouncementSchemaReturn = updateAnnouncementSchema.extend({
  id: z.string().optional(),
  createdAt: z.string().optional(),
});

const returnAnnouncementSchemaAll = createAnnouncementSchema.array();
const returnAnnouncementSchema = createAnnouncementSchema.extend({
  user: createUserSchema,
  image: createImageSchema.array()
});

export {
  announcementSchema,
  createAnnouncementSchema,
  updateAnnouncementSchema,
  updateAnnouncementSchemaReturn,
  returnAnnouncementSchemaAll,
  returnAnnouncementSchema,
};
