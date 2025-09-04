import { InputHTMLAttributes } from "react";

export type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  helperError?: string | undefined;
};
