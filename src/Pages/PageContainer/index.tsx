import React from "react";
import "./PageContainer.scss";
export const PageContainer: React.FunctionComponent = ({ children }) => {
  return <div className="page-container">{children}</div>;
};
