import { PropsWithChildren, use } from "react";
import { PopoverContext } from "./popover-context";

export const PopoverContentAction = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  const { setOpen } = use(PopoverContext);

  return (
    <div className={className} onClick={() => setOpen(false)}>
      {children}
    </div>
  );
};

export default PopoverContentAction;
