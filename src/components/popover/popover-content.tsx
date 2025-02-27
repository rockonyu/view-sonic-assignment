import { PropsWithChildren, use } from "react";
import { PopoverContext } from "./popover-context";
import { PopoverContentContainer } from "./styles";

export const PopoverContent = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  const { open } = use(PopoverContext);

  if (!open) {
    return null;
  }

  return (
    <PopoverContentContainer className={className}>
      {children}
    </PopoverContentContainer>
  );
};

export default PopoverContent;
