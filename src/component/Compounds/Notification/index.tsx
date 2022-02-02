import React from "react";
import "./Notification.scss";
import { ReactComponent as BellIcon } from "../../../images/bell.svg";
import { ReactComponent as SettingIcon } from "../../../images/settings.svg";
import { ReactComponent as Avata } from "../../../images/avatar.svg";
import { Header, Spacer, Upcoming, Document, Avatar } from "../../Atoms";
import bellicon from "../../../images/bell2.svg";
import { activites, messages } from "./helper";

export const Notifications = () => {
  return (
    <div className="notifications">
      <div className="nofificationHeader">
        <div className="icons">
          <div className="bellIcon">
            <BellIcon />
            <p className="notificationCount">2</p>
          </div>
          <SettingIcon />
        </div>
        <div className="avatar">
          <div className="avatarContainer">
            <Avata />
          </div>
        </div>
      </div>
      <Spacer height={40} />
      <Header header="Upcoming" />
      <Spacer height={30} />
      <Upcoming title="Meeting with Mr Lurah" subTitle="09:20AM" imgSrc={bellicon} />
      <Spacer height={20} />
      <Upcoming title="Meeting with Tok Dalang" subTitle="07:00AM" imgSrc={bellicon} />
      <Spacer height={40} />
      <Header header="Recent Activity" />
      <Spacer height={10} />
      {activites.map((activity, i) => (
        <div key={i}>
          <Spacer height={20} />
          <Document
            title={activity.title}
            subTitle={activity.subTitle}
            imgSrc={activity.imgSrc}
            type="recently"
            bgcolor={activity.bgcolor}
          />
        </div>
      ))}
      <Spacer height={40} />
      <Header header="Latest Message" noAction={false} />
      <Spacer height={30} />
      <div className="notificationsMessageContainer">
        {messages.map((message, i) => {
          if (message.type === "text") {
            return (
              <Avatar key={i}>
                <h2 style={{ color: "#1C4185" }}>{message.text}</h2>
              </Avatar>
            );
          } else {
            return (
              <Avatar key={i}>
                <img src={message.imgSrc} alt="avatar" />
              </Avatar>
            );
          }
        })}
      </div>
    </div>
  );
};
