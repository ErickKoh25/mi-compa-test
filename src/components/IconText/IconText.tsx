import React from "react";
import { When } from "react-if";
import { IconTextProps } from "../../interfaces/components/IconText";

const IconText = ({ className, error, icon }: IconTextProps) => {
  const renderIcon = () => {
    if(icon) {
      let Icon = icon
      return <Icon />
    }
    return "";
  }

  return (
    <span className={`${className} ${error ? "error" : ""}`}>
      <When condition={icon !== undefined}>
        {renderIcon()}
      </When>
    </span>
  );
};

export default IconText;
