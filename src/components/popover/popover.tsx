import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import { PopoverContext } from "./popover-context";
import { PopoverContainer } from "./styles";

export const Popover = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <PopoverContainer ref={popoverRef}>{children}</PopoverContainer>
    </PopoverContext.Provider>
  );
};

export default Popover;
