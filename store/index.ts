import { configureStore, createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    opacity: 1,
  },
  reducers: {
    setNavOpacity: (state, action) => {
      state.opacity = action.payload;
    },
  },
});

export const { setNavOpacity } = navSlice.actions;

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
