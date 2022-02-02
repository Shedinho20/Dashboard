import React from "react";
import "./HorizontalBar.scss";

type HorizontalbarProps = {
  bgColor1: string;
  bgColor2: string;
  width: string;
};
export const Horizontalbar: React.FC<HorizontalbarProps> = ({ bgColor1, bgColor2, width }) => {
  return (
    <div className="Horizontalbar" style={{ backgroundColor: `${bgColor1}` }}>
      <div className="HorizontalbarSlider" style={{ backgroundColor: `${bgColor2}`, width: `${width}` }}></div>
    </div>
  );
};
