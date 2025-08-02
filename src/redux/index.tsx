import { configureStore } from "@reduxjs/toolkit";
import savedSlice from "./features/saved.slice";

export const store = configureStore({
  reducer: {
    savedSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


store.subscribe(()=> {
  const state = store.getState();
  localStorage.setItem("saved", JSON.stringify(state.savedSlice.items));
})