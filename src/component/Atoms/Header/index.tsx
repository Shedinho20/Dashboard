import React from "react";
import { ReactComponent as Action } from "../../../images/callAction.svg";
import "./Header.scss";

type HeaderProps = {
  header?: string;
  padding?: string;
  noAction?: boolean;
};
export const Header: React.FC<HeaderProps> = ({ header, padding, noAction = true }) => {
  return (
    <div className="cardHeader" style={{ padding: `${padding}` }}>
      <p>{header}</p>
      {noAction ? <Action /> : null}
    </div>
  );
};
