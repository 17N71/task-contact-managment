import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ContactAPI } from "~/entities/contact/api";
import { updateContactSchema } from "~/entities/contact/model/schemas";
import { ContactEntity } from "~/entities/contact/model/types";
import {
  useDialogAction,
  useDialogState,
} from "~/shared/ui/dialog/model/dialog-contexts";
import type { EditDialogProps } from "./type";

export const useEditContact = () => {
  const queryClient = useQueryClient();

  const { dispatchDialog } = useDialogAction();
  const { dialogProps } = useDialogState<EditDialogProps>();
  const close = () => dispatchDialog(undefined);
  const { id } = dialogProps ?? { id: "" };
  const { mutateAsync } = useMutation({
    ...ContactAPI.updateContact(id),
    onSuccess: async () => {
      close();
      queryClient.refetchQueries();
    },
  });

  const form = useForm<Omit<ContactEntity, "id" | "avatar">>({
    validators: {
      onSubmit: updateContactSchema,
    },
    defaultValues: {
      ...dialogProps.editableContact,
    },
    onSubmit: async ({ value, formApi }) => {
      if (value) {
        await mutateAsync({ ...value, id });
        formApi.reset();
        formApi.setFieldValue("about", "");
        formApi.setFieldValue("email", "");
        formApi.setFieldValue("external_url", "");
        formApi.setFieldValue("name", "");
        formApi.setFieldValue("username", "");
        queryClient.refetchQueries();
      }
    },
  });

  return {
    close,
    form,
  };
};
