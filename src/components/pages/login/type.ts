import { loginFormSchema } from "@/components/schema/login/userLoginSchema";
import { z } from "zod";

export type loginForm = z.infer<typeof loginFormSchema>;
