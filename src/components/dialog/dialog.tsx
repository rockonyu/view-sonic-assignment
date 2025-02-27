import { PropsWithChildren, useState } from "react";

import { DialogContext } from "./dialog-context";

type DialogProps = {
  defaultOpen?: boolean;
};

export function Dialog({
  defaultOpen = false,
  children,
}: PropsWithChildren<DialogProps>) {
  const [open, setOpen] = useState(defaultOpen);

  if (!open) {
    return null;
  }

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export default Dialog;
