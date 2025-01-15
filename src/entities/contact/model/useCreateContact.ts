import { useForm } from "@tanstack/react-form";
import { ContactEntity } from "./types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ContactAPI } from "../api";
import { createContactSchema } from "./schemas";
import { useRouter } from "@tanstack/react-router";

export const useCreateContact = () => {
  const { mutateAsync } = useMutation(ContactAPI.createContact());
  const queryClient = useQueryClient();
  const { history } = useRouter();

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
        queryClient.refetchQueries();
      }
    },
  });

  const goBack = () => history.back();

  return { form, goBack };
};
