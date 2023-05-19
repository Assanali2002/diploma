import { configureStore, Store } from "@reduxjs/toolkit";
import authCheck from "./features/authCheck";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    authCheck: authCheck,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
