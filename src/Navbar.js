import React from "react";
import NavLinks from "./NavLinks";
import "./Nav.css"
function Navbar() {
  return (
      <header className="NVB__header">
        <nav className="NVB__nav">
          <NavLinks />
        </nav>
      </header>
  );
}

export default Navbar;
