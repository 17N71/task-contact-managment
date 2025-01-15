import type { ContactEntity } from "~/entities/contact/model/types";

export type DeleteDialogProps = {
  dialogProps: {
    id: string;
  };
};
export type EditDialogProps = {
  dialogProps: {
    id: string;
    editableContact: Omit<ContactEntity, "avatar">;
  };
};
