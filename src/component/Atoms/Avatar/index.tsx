import React from "react";
import "./Avatar.scss";

type AvatarProps = {
  children: React.ReactNode;
};
export const Avatar: React.FC<AvatarProps> = ({ children }) => {
  return <div className="avatarCom">{children}</div>;
};
