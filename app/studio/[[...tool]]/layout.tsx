import React from "react";

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden", position: "fixed", inset: 0, zIndex: 999 }}>
      {children}
    </div>
  );
}
