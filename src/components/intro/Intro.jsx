import "./intro.scss";
import Button from "@mui/material/Button";
import { init } from "ityped";
import cv from "./cv.pdf";
import dwload from "./IMG/download.svg";
import { useEffect, useRef } from "react";
import beneface from "./IMG/beneface.jpg";
import styled from "styled-components";
import "../contact/contact.scss";


const Downloader = styled.a`
  text-decoration: none;
`;
const Homeimage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  margin: 2vw;
  width: 40vw;
  height: 40vw;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 3px 2px;
`;

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "React Developer",
        "Graphic Designer",
        "Multilingual Content Creator"
      ]
    });
  }, []);

  return (
    <>
      <div className="intro" id="intro">
        <div className="left">
          <Homeimage src={beneface} alt="beneface" />
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There,</h2>
            <h1> I'm Benedikt</h1>
            <h3>
              Your <span ref={textRef}></span>
            </h3>
            <a id="arrowdown" href="#portfolio">
              <img id="blinker" src="assets/down.png" alt="" />
            </a>
            <Downloader className="cv" href={cv} download>
              <Button className="btn" variant="contained">
                <img className="btni" src={dwload} alt="" />
                CV
              </Button>
            </Downloader>
          </div>
        </div>
      </div>
    </>
  );
}
