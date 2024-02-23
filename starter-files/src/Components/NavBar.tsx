import React from "react";
import headerImg from "../images/raw/Girls-Listen-Music_0.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to="/">
      <header className="nav position-relative darkened-image">
        <h2 className="text-uppercase">music db</h2>
        <img className="header-img" src={headerImg} alt="" />
      </header>
    </Link>
  );
};

export default NavBar;
