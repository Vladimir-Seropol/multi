import React from "react";
import type { TextProps } from "../../../../types/types";


export const Text: React.FC<TextProps> = ({ children, style, className = "" }) => (
  <div style={style} className={className}>
    {children}
  </div>
);