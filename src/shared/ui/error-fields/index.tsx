import type { FieldApi } from "@tanstack/react-form";
import { nanoid } from "nanoid";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FormErrorField({
  field,
}: {
  field: FieldApi<any, any, any, any>;
}) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length
        ? field.state.meta.errors.map((error) => (
            <em key={nanoid()}>{error}</em>
          ))
        : false}
    </>
  );
}
