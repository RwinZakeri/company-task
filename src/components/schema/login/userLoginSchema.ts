import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "its too short").max(12),
  phone: z
    .string()
    .min(11)
    .max(12)
    .refine(
      (data) => {
        return data.startsWith("09");
      },
      {
        message: "its not iranian number",
      }
    ),
});
