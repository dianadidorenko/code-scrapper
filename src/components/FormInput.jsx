import React, { forwardRef } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const FormInput = forwardRef(
  (
    {
      label,
      id,
      type,
      placeholder,
      required,
      disabled,
      onBlur,
      defaultValue = "",
    },
    ref
  ) => {
    const { pending } = useFormStatus();

    return (
      <div>
        <div>
          {label ? (
            <Label
              htmlFor={id}
              className="text-xs font-semibold text-neutral-700"
            >
              {label}
            </Label>
          ) : null}
          <Input
            id={id}
            onBlur={onBlur}
            defaultValue={defaultValue}
            ref={ref}
            required={required}
            disabled={pending || disabled}
            placeholder={placeholder}
            name={id}
            type={type}
            className={cn("text-sm px-2 py-1 h-7")}
          />
        </div>
      </div>
    );
  }
);

export default FormInput;
