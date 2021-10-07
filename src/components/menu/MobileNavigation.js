import NavLinks from "../../NavLinks";
// import Menu from "../../NavLinks";
import "../../Nav.css";
import "../../App.css";
import Hamburger from "hamburger-react";

import { useState } from "react";
const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);
  return (
    <div className="topnav">
      <div
        className={open ? "MobileNavigation, hamburgerwrapper" : "red"}
        onClick={() => setOpen(!open)}
      >
        <Hamburger color={open ? "white" : "rgba(0, 134, 203, 0.9)"} />
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      </div>
    </div>
  );
};
export default MobileNavigation;
