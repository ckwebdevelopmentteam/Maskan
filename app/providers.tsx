"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const WindowSizeContext = createContext<boolean | null>(null);

import { Provider } from "react-redux";
import { store } from "@/store";

export const WindowSizeProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Provider store={store}>
      <WindowSizeContext.Provider value={isMobile}>
        {children}
      </WindowSizeContext.Provider>
    </Provider>
  );
};

export const useIsMobile = () => useContext(WindowSizeContext);
