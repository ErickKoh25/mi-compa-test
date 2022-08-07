import React from "react";
import { ValidationTextProps } from "../../interfaces/components/ValidationText";

const ValidationText = ({ className, icon, text }: ValidationTextProps) => {
  const Icon = icon;
  return (
    <div className={className}>
      <Icon />
      {text}
    </div>
  );
};

export default ValidationText;
