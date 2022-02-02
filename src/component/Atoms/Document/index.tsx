import React from "react";
import "./Document.scss";

type DocumentProps = {
  title: string;
  imgSrc: string;
  subTitle: string;
  type?: "document" | "recently";
  padding?: string;
  bgcolor?: string;
  backgroundcolor?: string;
};

export const Document: React.FC<DocumentProps> = ({
  title,
  imgSrc,
  subTitle,
  type,
  bgcolor,
  padding,
  backgroundcolor,
}) => {
  return (
    <div className="document" style={{ padding: `${padding}`, backgroundColor: `${backgroundcolor}` }}>
      <div className="imgContainer" style={{ backgroundColor: `${bgcolor}` }}>
        <img src={imgSrc} alt="icon" />
      </div>
      <div className="documentInfoContainer">
        <div className="documentContent">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
        {type !== "recently" ? <p>Submitted</p> : null}
      </div>
    </div>
  );
};
