import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ContactAPI } from "~/entities/contact/api";
import { updateContactSchema } from "~/entities/contact/model/schemas";
import type { ContactEntity } from "../model/types";
import { useContactStore } from "./store/contact";
import { useShallow } from "zustand/shallow";

export const useEditContact = (contact: ContactEntity) => {
  const queryClient = useQueryClient();
  const { setEditMode } = useContactStore(useShallow((prev) => ({ ...prev })));
  const { mutateAsync } = useMutation({
    ...ContactAPI.updateContact(String(contact?.id)),
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
      ...contact!,
    },
    onSubmit: async ({ value, formApi }) => {
      if (value) {
        try {
          await mutateAsync({ ...value, id: contact?.id });
          formApi.reset();
          formApi.setFieldValue("about", "");
          formApi.setFieldValue("email", "");
          formApi.setFieldValue("external_url", "");
          formApi.setFieldValue("name", "");
          formApi.setFieldValue("username", "");
          queryClient.refetchQueries();
          queryClient.invalidateQueries();
          setEditMode(false);
        } catch (error) {
          console.log("error", error);
        }
      }
    },
  });
  const goBack = () => {
    setEditMode(false);
  };

  return {
    close,
    form,
    goBack,
  };
};
