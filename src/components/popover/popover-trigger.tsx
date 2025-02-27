import { use, type PropsWithChildren } from "react";
import { PopoverContext } from "./popover-context";

export const PopoverTrigger = ({ children }: PropsWithChildren) => {
  const { setOpen } = use(PopoverContext);

  return <div onClick={() => setOpen((prev) => !prev)}>{children}</div>;
};

export default PopoverTrigger;
