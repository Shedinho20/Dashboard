import React from "react";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../../../images/logo.svg";
import { Spacer, NavLink, Button } from "../../Atoms";
import { navigation, teams } from "./helper";
import arrow from "../../../images/arrow-long-up.svg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
        <h3>
          ruang <span>tapa</span>
        </h3>
      </div>
      <Spacer height={60} />

      {navigation.map((link, i) => (
        <div key={i}>
          <Spacer height={10} />
          <NavLink to={link.to} label={link.label} imgSrc={link.imgSrc} />
        </div>
      ))}
      <Spacer height={40} />
      <h3 className="team">Teams</h3>
      <Spacer height={10} />
      {teams.map((link, i) => (
        <div key={i} style={{ position: "relative" }}>
          <Spacer height={10} />
          <div>
            <NavLink to={link.to} label={link.label} imgSrc={link.imgSrc} />
          </div>
          {link.label === "Message" ? <p className="messageCount">2</p> : null}
        </div>
      ))}
      <Spacer height={40} />
      <div className="arrowContainer">
        <div className="arrow">
          <img src={arrow} alt="arrow" />
        </div>
        <Spacer height={40} />
        <h3>Upgrade to Pro for more feature</h3>
        <Spacer height={40} />
        <Button padding="0.8rem 2.5rem" borderRadius="16px" color="#002979">
          Upgrade
        </Button>
        <Spacer height={40} />
      </div>
    </nav>
  );
};
