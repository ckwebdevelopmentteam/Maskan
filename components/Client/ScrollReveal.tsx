import React from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
