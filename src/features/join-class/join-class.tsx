import { ChevronLeft } from "lucide-react";

import { Dialog, DialogTitle, DialogClose } from "@/components/dialog";

import { CopyButton } from "./copy-button";
import { QrCode } from "./qr-code";
import { BackLink, ClassroomInfo, DialogContent, VersionText } from "./styles";

type JoinClassProps = {
  classId: string;
  name: string;
  url: string;
};

export const JoinClass = ({ classId, name, url }: JoinClassProps) => (
  <Dialog defaultOpen={true}>
    <DialogContent>
      <BackLink href="#">
        <ChevronLeft size={16} />
        Back to Class List
      </BackLink>

      <DialogClose />

      <DialogTitle>Join {name}</DialogTitle>

      <ClassroomInfo>
        <span>
          ID: {classId}&nbsp; <CopyButton text={classId} />
        </span>
        <span>
          Link&nbsp; <CopyButton text={url} />
        </span>
      </ClassroomInfo>

      <QrCode text={url} />

      <VersionText>Version 1.1.7</VersionText>
    </DialogContent>
  </Dialog>
);

export default JoinClass;
