import { File } from "buffer";
import * as z from "zod";

const MAX_MB = 1;
const MAX_UPLOAD_SIZE = 1024 * 1024 * MAX_MB;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const motorSchema = z.object({
    name: z
        .string()
        .min(3, {
            message: "Name must be at least 3 characters",
        })
        .max(50, {
            message: "Name must be less than 50 characters",
        }),
    description: z
        .string()
        .min(3, {
            message: "Description must be at least 3 characters",
        })
        .max(50, {
            message: "Description must be less than 50 characters",
        })
        .optional(),
    price: z
        .number({
            invalid_type_error: "Price must be a number",
        })
        .gt(0, {
            message: "Price must be greater than 0",
        }),
    branch_id: z
    .number({
        invalid_type_error: "'branch_id' must be a number",
    }),
    owner_id: z
    .string()
    .cuid({
        message: "Owner id must be a valid cuid",
    }),
    image: z
    .instanceof(File)
    .optional()
    .refine(
        (file) => !file || file.size <= MAX_UPLOAD_SIZE,
        `Max image size is ${MAX_MB}MB`
      )
      .refine(
        (file) =>
          !file || file.type === "" || ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Only .jpg, .jpeg, .png, and .webp formats are supported"
      ),
})

export type MotorSchema = z.infer<typeof motorSchema>