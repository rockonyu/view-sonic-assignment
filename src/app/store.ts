import { configureStore } from "@reduxjs/toolkit";
import classReducer from "@/features/class/class-slice";

export const store = configureStore({
  reducer: {
    class: classReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
