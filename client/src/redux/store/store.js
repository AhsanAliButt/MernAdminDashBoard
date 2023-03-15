import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "../Slicers/modeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../api/api";

const store = configureStore({
  reducer: {
    mode: modeReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);
export default store;
