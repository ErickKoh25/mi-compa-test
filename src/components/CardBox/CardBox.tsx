import React from "react";
import { CardProps } from "../../interfaces/components/Card";

const CardBox = ({ index, item }: CardProps) => {
  return (
    <div key={index} className="item-card">
      <div className="cont-icon">
        <item.icon />
      </div>
      <div className="cont-texts">
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>
      </div>
    </div>
  );
};

export default CardBox;
