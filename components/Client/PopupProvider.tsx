"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import InquiryPopupForm from "./InquiryPopupForm";

interface PopupContextType {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // Global interceptor for links to "#contact" or "/#contact"
  React.useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestLink = target.closest("a");
      
      if (closestLink) {
        const href = closestLink.getAttribute("href");
        if (href === "#contact" || href === "/#contact") {
          e.preventDefault();
          openPopup();
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup }}>
      {children}
      <InquiryPopupForm isOpen={isPopupOpen} onClose={closePopup} />
    </PopupContext.Provider>
  );
};
