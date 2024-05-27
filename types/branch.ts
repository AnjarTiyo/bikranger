import * as z from "zod";

export const branchSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters",
    })
    .max(50, {
      message: "Name must be less than 50 characters",
    }),
  loc_map: z
    .string()
    .regex(
      /^-?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*-?(1[0-7]\d(\.\d+)?|180(\.0+)?|[1-9]?\d(\.\d+)?)$/,
      {
        message: "Invalid location",
      }
    ),
  abbreviation: z
    .string()
    .length(3, {
      message: "Abbreviation must be 3 characters",
    })
    .transform((val) => val.toUpperCase()),
  owner_id: z.string(),
});

export type BranchSchema = z.infer<typeof branchSchema>;
