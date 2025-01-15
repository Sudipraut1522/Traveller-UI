import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "500px",
    };

const arrowStyle = {
  cursor: "default",
};

const Slideshow = ({ slideImages }) => {
  return (
    <div className="slide-container ">
      <Slide
        prevArrow={<div style={arrowStyle}> </div>}
        nextArrow={<div style={arrowStyle}> </div>}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle }} className="rounded-lg">
              <img
                src={slideImage.src}
                alt=""
                className="absolute inset-0 w-full h-full  "
              />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
