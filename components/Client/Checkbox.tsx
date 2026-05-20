"use client";
import cn from "@/utils/cn";
import React, { ReactNode, useState } from "react";
import CheckBoxIcon from "../SVGComponents/CheckBoxIcon";

interface CheckboxProps {
  children: ReactNode;
  className?: string;
  required?: boolean;
  name?: string;
  value?: string;
}

export default function Checkbox({
  children,
  className,
  required = false,
  name,
  value,
}: CheckboxProps) {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <label
      className={cn(
        "flex cursor-pointer items-center gap-2 text-[var(--bg-primary)]",
        className,
      )}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        className="hidden"
        onChange={handleChange}
        required={required}
      />
      <span
        className={cn(
          "grid size-3-5 place-items-center border border-[var(--bg-primary)]",
          checked && "bg-[var(--bg-primary)]",
        )}
      >
        {checked && <CheckBoxIcon className="h-auto w-1-75" />}
      </span>
      <div className="text-sm [line-height:1] md:text-base">{children}</div>
    </label>
  );
}
