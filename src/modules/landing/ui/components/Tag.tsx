import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...rest } = props;

  return (
    <div
      className={twMerge(
        "inline-flex border border-[#1e293b] gap-2 text-[#1e293b] px-3 py-1 rounded-full uppercase items-center bg-white/80",
        className
      )}
      {...rest}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};

export default Tag;
