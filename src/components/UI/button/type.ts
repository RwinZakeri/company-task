import { ButtonHTMLAttributes, ReactNode } from "react";

export type CustomeButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
