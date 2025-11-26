import React from "react";
import type { TextProps } from "@/types/types";

export const Text: React.FC<TextProps & { as?: keyof JSX.IntrinsicElements }> = ({
  children,
  className = "",
  as = "div",
}) => {
  const Component = as;
  return <Component className={className}>{children}</Component>;
};
