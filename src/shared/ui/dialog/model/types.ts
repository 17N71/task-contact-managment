export type DialogNames = "edit-contact" | "delete-contact" | undefined;

export type DialogStateContextProps =
  | {
      dialogName: DialogNames;
      dialogProps?: object;
    }
  | undefined;

export type DialogActionContextProps =
  | {
      dispatchDialog: (name: DialogNames, dialogProps?: object) => void;
    }
  | undefined;

export type DialogProps = {
  isOpen?: boolean;
  onClose: () => void;
};
