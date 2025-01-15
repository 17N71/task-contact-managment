import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ContactAPI } from "~/entities/contact/api";
import {
  useDialogAction,
  useDialogState,
} from "~/shared/ui/dialog/model/dialog-contexts";

export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  const { dialogProps } = useDialogState();
  const { dispatchDialog } = useDialogAction();
  const dialogState = (dialogProps || { id: "" }) as { id: string };
  const close = () => dispatchDialog(undefined);

  return {
    close,
    ...useMutation({
      ...ContactAPI.deleteUserById(dialogState.id),
      onSuccess: async () => {
        close();
        queryClient.refetchQueries();
      },
    }),
  };
};
