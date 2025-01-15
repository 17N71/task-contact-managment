import { lazy } from "react";
import { DELETE_CONTACT } from "~/shared/ui/dialog/model";

export const dialogs = {
  [DELETE_CONTACT]: lazy(
    async () => await import("./ui/delete-dialog-content")
  ),
} as const;
