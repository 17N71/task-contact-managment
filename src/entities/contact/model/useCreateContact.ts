import { useForm } from "@tanstack/react-form";
import { ContactEntity } from "./types";
import { useMutation } from "@tanstack/react-query";
import { ContactAPI } from "../api";
import { createContactSchema } from "./schemas";

export const useCreateContact = () => {
  const { mutateAsync } = useMutation(ContactAPI.createUser());
  const form = useForm<Omit<ContactEntity, "id">>({
    validators: {
      onSubmit: createContactSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      if (value) {
        await mutateAsync(value);
        formApi.reset();
        formApi.setFieldValue("about", "");
        formApi.setFieldValue("avatar", "");
        formApi.setFieldValue("email", "");
        formApi.setFieldValue("external_url", "");
        formApi.setFieldValue("name", "");
        formApi.setFieldValue("username", "");
      }
    },
  });

  return { form };
};
