import { createContext, useContext } from "react";
import type {
  DialogActionContextProps,
  DialogStateContextProps,
} from "./types";

export const DialogStateContext =
  createContext<DialogStateContextProps>(undefined);

export const DialogActionContext =
  createContext<DialogActionContextProps>(undefined);

export const useDialogAction = () => {
  const dialogAction = useContext(DialogActionContext);
  if (!dialogAction) {
    throw new Error("useDialogAction must be used with in DialogProvider");
  }
  return dialogAction;
};

export const useDialogState = () => {
  const dialogState = useContext(DialogStateContext);
  if (!dialogState) {
    throw new Error("useDialogState must be used with in DialogProvider");
  }
  return dialogState;
};
