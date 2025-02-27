import { useCallback } from "react";
import { EllipsisVertical, User2 } from "lucide-react";

import { Dialog, DialogClose } from "@/components/dialog";
import { joinClass } from "@/features/class";
import { Popover, PopoverTrigger } from "@/components/popover";
import { Student, useJoinClassStudent } from "@/services/api";
import { Tabs, TabsList, TabsTrigger } from "@/components/tabs";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

import { SeatList } from "./seat-list";
import { GroupList } from "./group-list";
import {
  AttendCount,
  DialogContent,
  DialogTitle,
  TabsContent,
  TabsContentContainer,
  TabsListEllipsisButton,
  PopoverContent,
  PopoverContentAction,
} from "./styles";

type ClassroomProps = {
  name: string;
  classId: string;
};

export const Classroom = ({ classId, name }: ClassroomProps) => {
  const seats = useAppSelector((state) => state.class[classId]?.seats);

  const dispatch = useAppDispatch();

  const onStudentJoin = useCallback(
    (student: Student) => {
      dispatch(joinClass({ classId, ...student }));
    },
    [classId, dispatch]
  );

  useJoinClassStudent({ classId, onStudentJoin });

  return (
    <Dialog defaultOpen={true}>
      <DialogContent>
        <DialogClose />

        <DialogTitle>
          {name}
          <User2 size={16} />
          <AttendCount>
            {seats?.ids.length ?? 0}/{seats?.totalCount}
          </AttendCount>
        </DialogTitle>

        <Tabs defaultValue="student-list">
          <TabsList>
            <div>
              <TabsTrigger value="student-list">Student List</TabsTrigger>
              <TabsTrigger value="group">Group</TabsTrigger>
            </div>

            <Popover>
              <PopoverTrigger>
                <TabsListEllipsisButton>
                  <EllipsisVertical size={16} />
                </TabsListEllipsisButton>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverContentAction>Settings</PopoverContentAction>
                <PopoverContentAction>Export</PopoverContentAction>
              </PopoverContent>
            </Popover>
          </TabsList>

          <TabsContentContainer>
            <TabsContent value="student-list">
              <SeatList classId={classId} />
            </TabsContent>
            <TabsContent value="group">
              <GroupList classId={classId} />
            </TabsContent>
          </TabsContentContainer>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Classroom;
