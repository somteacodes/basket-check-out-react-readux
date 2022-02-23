import { configureStore } from "@reduxjs/toolkit";
import rootReduer from "./modules/rootReduer";
export const store = configureStore({
  reducer: rootReduer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
