import z from "zod";
import { imageSchema } from "../schemas/image.schema";

type iImage = z.infer<typeof imageSchema>;

export { iImage };
