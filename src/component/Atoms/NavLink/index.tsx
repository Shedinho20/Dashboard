import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./NavLink.scss";

type LinkProps = {
  label: string;
  to: string;
  imgSrc?: string;
};

export const NavLink: React.FC<LinkProps> = ({ label, to, imgSrc }) => {
  return (
    <Link to={to} className={({ isActive }: any) => (isActive ? "navLinkactive" : "navLinkinactive")}>
      <img src={imgSrc} alt="link" />
      {label}
    </Link>
  );
};
