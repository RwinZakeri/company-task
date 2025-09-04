import { forwardRef } from "react";
import { CustomInputProps } from "./type";

const CustomeInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ helperError, ...props }, ref) => {
    return (
      <>
        <input ref={ref} {...props} />
        {helperError && helperError}
      </>
    );
  }
);

CustomeInput.displayName = "CustomeInput";

export default CustomeInput;
