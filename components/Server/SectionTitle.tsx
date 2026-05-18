import { CSSProperties } from "react";
import BurgerSVG from "../SVGComponents/BurgerSVG";
import cn from "@/utils/cn";

interface SectionTitleProps {
  children: string;
  className?: string;
  style?: CSSProperties;
  titleClassName?: string;
}
export default function SectionTitle({
  children,
  className,
  style,
  titleClassName,
}: SectionTitleProps) {
  return (
    <div
      style={{ ...style }}
      className={cn("flex h-fit items-center gap-5 justify-center md:justify-start w-full md:w-auto", className)}
    >
      <BurgerSVG />
      <div className={cn("text-base [line-height:1] md:text-xl uppercase tracking-widest", titleClassName)}>{children}</div>
    </div>
  );
}
