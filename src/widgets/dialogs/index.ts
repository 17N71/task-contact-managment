import { lazy } from "react";
import { DELETE_CONTACT, EDIT_CONTACT } from "~/shared/ui/dialog/model";

export const dialogs = {
  [EDIT_CONTACT]: lazy(async () => await import("./ui/edit-dialog-content")),
  [DELETE_CONTACT]: lazy(
    async () => await import("./ui/delete-dialog-content")
  ),
};
