import { ClassDetail, Student } from "@/services/api";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SeatGroup = {
  id: number;
  seatIds: number[];
};

export type ClassState = Record<
  string,
  | {
      id: string;
      name: string;
      url: string;
      seats: {
        totalCount: number;
        ids: number[];
        entities: Record<number, Student>;
      };
      groups: {
        ids: number[];
        entities: Record<number, SeatGroup>;
      };
    }
  | undefined
>;

export type JoinClassPayload = { classId: string; seatId: number } & Student;

const initialState: ClassState = {};

export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    startClass: (state, action: PayloadAction<ClassDetail>) => {
      if (state[action.payload.id]) {
        return;
      }

      const { id, name, url, seatCount } = action.payload;

      state[action.payload.id] = {
        id,
        name,
        url,
        seats: { totalCount: seatCount, ids: [], entities: {} },
        groups: { ids: [], entities: {} },
      };
    },
    joinClass: (
      state,
      action: PayloadAction<{ classId: string } & Student>
    ) => {
      const { classId, ...student } = action.payload;
      const current = state[classId];

      if (!current || current.seats.entities[student.seatId]) {
        return;
      }

      current.seats.ids.push(student.seatId);
      current.seats.entities[student.seatId] = student;

      if (!current.groups.entities[student.groupId]) {
        current.groups.ids.push(student.groupId);
        current.groups.entities[student.groupId] = {
          id: student.groupId,
          seatIds: [],
        };
      }

      current.groups.entities[student.groupId].seatIds.push(student.seatId);
    },
  },
});

export const { startClass, joinClass } = classSlice.actions;

export default classSlice.reducer;
