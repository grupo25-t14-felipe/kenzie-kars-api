import { z } from "zod";

const announcementSchema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.number(),
  mileage: z.number(),
  color: z.string(),
  price_table_fipe: z.string(),
  price: z.string(),
  description: z.string(),
  published: z.boolean(),
});

const createAnnouncementSchema = announcementSchema.extend({
  id: z.string(),
  createdAt: z.string(),
});

const updateAnnouncementSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  year: z.string().optional(),
  fuel: z.number().optional(),
  mileage: z.number().optional(),
  color: z.string().optional(),
  price_table_fipe: z.string().optional(),
  price: z.string().optional(),
  description: z.string().optional(),
  published: z.boolean().optional(),
});

const updateAnnouncementSchemaReturn = updateAnnouncementSchema.extend({
  id: z.string().optional(),
  createdAt: z.string().optional(),
});

const returnAnnouncementSchemaAll = announcementSchema.array();

export {
  announcementSchema,
  createAnnouncementSchema,
  updateAnnouncementSchema,
  updateAnnouncementSchemaReturn,
  returnAnnouncementSchemaAll,
};
