import React from "react";
import Logo from "../assets/logoW.svg";

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

const Header = () => (
  <header>
    <div className="logo">
      <img src={Logo} alt="Weather Logo" />
      <h1>Weather Forecast</h1>
    </div>
    <div className="date">{dateBuilder(new Date())}</div>
  </header>
);

export default Header;
