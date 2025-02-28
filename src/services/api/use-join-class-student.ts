import { BASE_WS_PATH } from "@/constants/api";
import { useEffect } from "react";

export type Student = {
  seatId: number;
  name: string;
  score: number;
  groupId: number;
};

type UseGetJoinClassParams = {
  classId: string;
  onStudentJoin: (student: Student) => void;
};

export const useJoinClassStudent = ({
  classId,
  onStudentJoin,
}: UseGetJoinClassParams) => {
  useEffect(() => {
    const socket = new WebSocket(`${BASE_WS_PATH}/class/${classId}`);

    socket.addEventListener("message", (event) => {
      const student = JSON.parse(event.data) as Student;

      onStudentJoin({ ...student });
    });
  }, [classId, onStudentJoin]);
};
