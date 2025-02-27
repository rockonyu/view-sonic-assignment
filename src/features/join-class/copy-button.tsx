import { Check, Files } from "lucide-react";
import { useState } from "react";

import { IconButton } from "./styles";

type CopyButtonProps = {
  text: string;
};

export const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <IconButton onClick={handleClick}>
      {copied ? <Check size={16} /> : <Files size={16} />}
    </IconButton>
  );
};

export default CopyButton;
