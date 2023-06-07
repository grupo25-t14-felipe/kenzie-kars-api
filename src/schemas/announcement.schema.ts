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

export { announcementSchema, createAnnouncementSchema };
