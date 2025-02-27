import { createContext, Dispatch, SetStateAction } from "react";

export const DialogContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({ open: false, setOpen: () => {} });
