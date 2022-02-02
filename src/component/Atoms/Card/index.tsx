import React from "react";
import { Header } from "..";
import "./Card.scss";
type CardProps = {
  flex?: string;
  header?: string;
  marginRight?: string;
  padding?: string;
};
export const Card: React.FC<CardProps> = ({ flex, marginRight, children, header, padding }) => {
  const styles = {
    flex: `${flex}`,
    marginRight: `${marginRight}`,
  };
  return (
    <div className="card" style={styles}>
      <Header header={header} padding={padding} />
      {children}
    </div>
  );
};
