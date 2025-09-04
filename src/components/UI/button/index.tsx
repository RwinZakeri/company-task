import { ButtonHTMLAttributes, forwardRef } from "react";
import { CustomeButtonType } from "./type";

const CustomeButton = forwardRef<HTMLButtonElement, CustomeButtonType>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

CustomeButton.displayName = "CustomeButton";

export default CustomeButton;
