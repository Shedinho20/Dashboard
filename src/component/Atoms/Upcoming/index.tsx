import React from "react";
import "./Upcoming.scss";

type UpcomingProps = {
  title: string;
  imgSrc: string;
  subTitle: string;
};

export const Upcoming: React.FC<UpcomingProps> = ({ title, imgSrc, subTitle }) => {
  return (
    <div className="upcoming">
      <div className="imgContainer">
        <img src={imgSrc} alt="icon" />
      </div>
      <div className="upcomingInfoContainer">
        <div className="upcomingContent">
          <h3>{title}</h3>
          <p>
            {subTitle} <span>Due Soon</span>
          </p>
        </div>
      </div>
    </div>
  );
};
