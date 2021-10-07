import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import MobileNavigation from "./components/menu/MobileNavigation";
import Navbar from "./Navbar";

const useElementOnScreen = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

  // the menu start

  const containerRef = useRef(null);

  const callbackFunction = entries => {
    const [entry] = entries;
    if (entry.isIntersecting === true) {
      const intersectedElement = entry.target.className;
      console.log("IST" + entry.isIntersecting);
      console.log("IS" + intersectedElement);
      const activeAnchor = document
        .querySelector(`[data-page=${intersectedElement}]`)
        .classList.add("mystyle");
      // console.log("activeAnchor" + `[data-page=${intersectedElement}]`);
      // console.log("entryintersect" + entry.isIntersecting);
    }
    if (entry.isIntersecting === false) {
      const intersectedElement = entry.target.className;
      const activeAnchor = document
        .querySelector(`[data-page=${intersectedElement}]`)
        .classList.remove("mystyle");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  // the menu stop

  return containerRef;
};

function App() {
  const sections = document.querySelectorAll("section");
  const homeRef = useElementOnScreen();
  const projectRef = useElementOnScreen();
  const pfolioRef = useElementOnScreen();
  const contactRef = useElementOnScreen();

  return (
    <div className="app">
      <Navbar /> <MobileNavigation />
      <main className="sections">
        <section>
          <div ref={homeRef} className="home">
            <Intro />
          </div>
        </section>
        <section>
          <div ref={projectRef} className="project">
            <Works />
          </div>
        </section>
        <section>
          <div ref={pfolioRef} className="pfolio">
            <Portfolio />
          </div>
        </section>
        <section>
          <div ref={contactRef} className="contact">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
