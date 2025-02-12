import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../ReduxRTK/themeSlice";
import counterReducer from "../ReduxRTK/counterSlice"
import sandwichReducer from "../ReduxRTK/sandwichSlice"

export const store = configureStore({
  reducer: {
    sandwich: sandwichReducer, 
    theme: themeReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
