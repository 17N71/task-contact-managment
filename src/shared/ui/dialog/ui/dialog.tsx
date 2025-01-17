import { useOutsideClick } from "~/shared/utils/hooks/use-on-outside-click";
import { useDialogAction, useDialogState } from "../model/dialog-contexts";
import { dialogs } from "~/widgets/dialogs";
import { Suspense } from "react";
import type { DialogStateType } from "../model/types";

export function Dialog() {
  const { dispatchDialog } = useDialogAction();
  const { dialogName } = useDialogState<DialogStateType>();
  const ref = useOutsideClick(() => dispatchDialog(undefined));

  if (!dialogName) {
    return false;
  }
  const DialogContent = dialogs[dialogName];

  return (
    <div className="fixed w-full h-full top-0 left-0 bg-black/30 flex justify-center items-center">
      <div ref={ref} className="bg-white p-8 rounded-xl max-w-fit">
        <div className="mt-8">
          {DialogContent && (
            <Suspense>
              <DialogContent />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
