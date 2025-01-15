import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ContactAPI } from "~/entities/contact/api";
import {
  useDialogAction,
  useDialogState,
} from "~/shared/ui/dialog/model/dialog-contexts";
import type { DeleteDialogProps } from "./type";
import { useNavigate } from "@tanstack/react-router";

export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  const { dialogProps } = useDialogState<DeleteDialogProps>();
  const { dispatchDialog } = useDialogAction();
  const dialogState = dialogProps || { id: "" };
  const navigate = useNavigate();
  const close = () => dispatchDialog(undefined);
  const { data, isLoading } = useQuery(ContactAPI.getContacts());

  return {
    close,
    ...useMutation({
      ...ContactAPI.deleteContactById(dialogState.id),
      onSuccess: async () => {
        await queryClient.refetchQueries();
        if (!isLoading) {
          navigate({
            to: "/$contactId",
            params: { contactId: String(data?.[0].id) },
          });
        }

        close();
      },
    }),
  };
};
