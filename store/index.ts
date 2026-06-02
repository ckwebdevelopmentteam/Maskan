import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "blueWhite", // safe SSR default; client restores from localStorage via ThemeProvider
  },
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.currentTheme = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("maskan-theme", action.payload);
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
