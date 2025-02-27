import { use } from "react";
import { X } from "lucide-react";

import { DialogContext } from "./dialog-context";
import { DialogCloseButton } from "./styles";

export function DialogClose() {
  const { setOpen } = use(DialogContext);

  return (
    <DialogCloseButton onClick={() => setOpen(false)}>
      <X color="#2f3130" size={16} />
    </DialogCloseButton>
  );
}

export default DialogClose;
