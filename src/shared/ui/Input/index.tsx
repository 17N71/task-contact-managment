import type { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { cn } from "~/shared/utils/cn";

export function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      {...props}
      className={cn(
        "px-2 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
        props.className
      )}
    />
  );
}
