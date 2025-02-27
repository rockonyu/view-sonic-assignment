import { useState } from "react";
import {
  ScoreButton,
  SeatCard,
  SeatCardContent,
  SeatCardFooter,
  SeatCardHeader,
} from "./styles";

type SeatProps = {
  id: number;
  name?: string;
  defaultScore?: number;
};

export const Seat = ({ id, name, defaultScore = 0 }: SeatProps) => {
  const [score, setScore] = useState(defaultScore);

  return (
    <SeatCard $active={name !== undefined}>
      <SeatCardHeader>
        {id.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
      </SeatCardHeader>

      <SeatCardContent title={name}>{name ?? "Guest"}</SeatCardContent>

      <SeatCardFooter>
        <ScoreButton
          $variant="subtract"
          onClick={() => setScore((prev) => prev - 1)}
        >
          -1
        </ScoreButton>
        {score}
        <ScoreButton
          $variant="add"
          onClick={() => setScore((prev) => prev + 1)}
        >
          +1
        </ScoreButton>
      </SeatCardFooter>
    </SeatCard>
  );
};

export default Seat;
