import { useMemo } from "react";

import { Seat } from "./seat";
import { SeatListContainer } from "./styles";
import { useAppSelector } from "@/app/hooks";

type SeatListProps = {
  classId: string;
};

export const SeatList = ({ classId }: SeatListProps) => {
  const seats = useAppSelector((state) => state.class[classId]?.seats);

  const allSeats = useMemo(
    () => Array.from({ length: seats?.totalCount ?? 0 }, (_, i) => i + 1),
    [seats?.totalCount]
  );

  return (
    <SeatListContainer>
      {allSeats.map((seatId) => {
        const student = seats?.entities[seatId];

        return (
          <Seat
            id={seatId}
            key={`${seatId}_${student?.name}`}
            name={student?.name}
            defaultScore={student?.score}
          />
        );
      })}
    </SeatListContainer>
  );
};

export default SeatList;
