import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ContactAPI } from "~/entities/contact/api";
import {
  useDialogAction,
  useDialogState,
} from "~/shared/ui/dialog/model/dialog-contexts";
import type { DeleteDialogProps } from "./type";

export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  const { dialogProps } = useDialogState<DeleteDialogProps>();
  const { dispatchDialog } = useDialogAction();
  const dialogState = dialogProps || { id: "" };
  const close = () => dispatchDialog(undefined);

  return {
    close,
    ...useMutation({
      ...ContactAPI.deleteContactById(dialogState.id),
      onSuccess: async () => {
        close();
        queryClient.refetchQueries();
      },
    }),
  };
};
