import React from "react";
import "./App.css";
import { motion } from "framer-motion";
const animateFrom = { opacity: 0, y: -40 };
const animateTo = { opacity: 1, y: 0 };

function NavLinks(props) {
  return (
    <div>
      <ul className="NVB__ul">
        <motion.li
          className="NVB__ulli"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.15 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a className="NVB__navitem" data-page="home" href="#intro">
            Home
          </a>
        </motion.li>
        <motion.li
          className="NVB__ulli"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.35 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a
            className="NVB__navitem"
            id="project"
            data-page="project"
            href="#about"
          >
            About me
          </a>
        </motion.li>
        <motion.li
          className="NVB__ulli"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.55 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a
            className="NVB__navitem"
            id="pfolio"
            data-page="pfolio"
            href="#portfolio"
          >
            Portfolio
          </a>
        </motion.li>
        <motion.li
          className="NVB__ulli"
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.95 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a
            className="NVB__navitem"
            id="contact"
            data-page="contact"
            href="#contactid"
          >
            Contact
          </a>
        </motion.li>
      </ul>
    </div>
  );
}

export default NavLinks;
// responsive navbar https://www.youtube.com/watch?v=Et5tDPoU03c&t=1148s
