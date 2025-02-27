import {
  GroupCard,
  GroupCardContent,
  GroupCardHeader,
  GroupUl,
  GroupLi,
  GroupSeatCard,
  SeatCardContent,
} from "./styles";
import { useAppSelector } from "@/app/hooks";

type GroupListProps = {
  classId: string;
};

export const GroupList = ({ classId }: GroupListProps) => {
  const classGroups = useAppSelector((state) => state.class[classId]?.groups);
  const classSeats = useAppSelector((state) => state.class[classId]?.seats);

  return (
    <GroupUl>
      {classGroups?.ids.map((groupId) => (
        <GroupLi key={groupId}>
          <GroupCard>
            <GroupCardHeader>{groupId}</GroupCardHeader>
            <GroupCardContent>
              {classGroups.entities[groupId].seatIds.map((studentId) => (
                <GroupSeatCard>
                  <SeatCardContent>
                    {classSeats?.entities[studentId].name}
                  </SeatCardContent>
                </GroupSeatCard>
              ))}
            </GroupCardContent>
          </GroupCard>
        </GroupLi>
      ))}
    </GroupUl>
  );
};

export default GroupList;
