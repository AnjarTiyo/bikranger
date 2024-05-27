import * as z from "zod";

export const orderSchema = z.object({
  user_id: z.string(),
  motor_id: z.string(),
  duration: z.number(),
  start_date: z
    .string()
    .regex(
      /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4}) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
      {
        message: "Invalid date format",
      }
    ),
  end_date: z
    .string()
    .regex(
      /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4}) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/,
      {
        message: "Invalid date format",
      }
    ),
  phone_number: z.string().regex(/^\+?\d{8,18}$/, {
    message:
      "Phone number must start with an optional plus sign and be 8 to 18 digits long",
  }),
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: "Invalid email format",
  }),
});

export type OrderFormValues = z.infer<typeof orderSchema>;