import { useState } from "react";
import "./works.scss";
import { uuid } from "uuidv4";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: uuid(),
      icon: "./assets/mobile.png",
      title1: "A dedicated",
      title2: "React-Instructor.",
      desc1:
        "I have been a graphic designer since 1989, went back to school and learned how to code.",
      desc2:
        "Since July 2019 I am a REACT instructor at Intec Brussels. Teaching complex code as simple as possible made me an appreciated job-generator for my students. ",
      img: "./assets/klas.jpeg"
    },
    {
      id: uuid(),
      icon: "./assets/globe.png",
      title1: "Multi-lingual",
      title2: "as no other...",
      desc0: "Allways eager to learn and improving.",
      desc1: "The Kaizen approach to development.",
      desc2:
        "In the 21 century, one shouldn't limit yourself to your cultural lifestyle or age.",
        img: "./assets/react.jpeg"
      },
    {
      id: uuid(),
      icon: "./assets/code.png",
      title1: "My home office...",
      title2: "for the love of coding.",
      desc1: "Seeing is believing, how else would I be able to convince you of what I like doing the most.",
      desc2: "Contact me, or call one of my over 1000 Linked-in contacts for any information about me.",
      img: "./assets/room.jpeg"
}
  ];

  const handleClick = way => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="about">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title1}</h2>
                  <h2>{d.title2}</h2>
                  <p>{d.desc0}</p>
                  <p>{d.desc1}</p>
                  <p>{d.desc2}</p>
                </div>
              </div>
              <div className="right">
                {/* <img src={d.img} alt="" /> */}
                {/* <img className="sliderimg" src={klas} alt="" /> */}
                <img
                  className="sliderimg"
                  src={(d.img)}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
