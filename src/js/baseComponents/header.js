import React from "react";
import Logo from "../svg/logo";
import dateBuilder from "../functions/date";

const Header = () => (
  <header>
    <div className="logo">
      <Logo />
      <h1>Weather Forecast</h1>
    </div>
    <div className="date">{dateBuilder(new Date())}</div>
  </header>
);

export default Header;
