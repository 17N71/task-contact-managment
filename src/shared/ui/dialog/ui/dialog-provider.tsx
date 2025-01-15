import { PropsWithChildren, useCallback, useState } from "react";
import {
  DialogStateContext,
  DialogActionContext,
} from "../model/dialog-contexts";

import type { DialogNames } from "../model/types";

export function DialogProvider({ children }: PropsWithChildren) {
  const [dialogName, setDialogName] = useState<DialogNames>(undefined);
  const [dialogProps, setDialogProps] = useState<undefined | object>(undefined);

  const dispatchDialog = useCallback(
    (state: DialogNames, dialogProps?: object) => {
      setDialogName(state);
      if (dialogProps) {
        setDialogProps(dialogProps);
      }
    },
    []
  );

  return (
    <DialogStateContext.Provider value={{ dialogName, dialogProps }}>
      <DialogActionContext.Provider value={{ dispatchDialog }}>
        {children}
      </DialogActionContext.Provider>
    </DialogStateContext.Provider>
  );
}
