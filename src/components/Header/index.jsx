import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <Link to={"/"}>Home</Link>
        <Link to={"create"}>CreateProduct</Link>
      </div>
    </div>
  );
};

export default Header;
