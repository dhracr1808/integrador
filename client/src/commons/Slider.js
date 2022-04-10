import React from "react";
import { changeSlider } from "../utils/slider";

const Slider = () => {
  setInterval(() => {
    const img = document.getElementById("img");
    img.setAttribute("src", changeSlider());
  }, 10000);

  return (
    <div className="slider">
      <div className="slider_content_img">
        <img id="img" src={changeSlider()} alt="iemagen " />
        <div className="slider_content_over d-flex">
          <h1 className="text-center">
            la immoviliaria de tus sueños esta aquí
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
