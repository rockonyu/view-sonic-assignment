import { createContext, Dispatch, SetStateAction } from "react";

export const PopoverContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({ open: false, setOpen: () => {} });
