import React, { useState } from "react";
import { MdFavorite, MdLocationPin, MdFavoriteBorder } from "./../icons";
import { AiFillStar, AiOutlineStar } from "./../icons";
import { UseHookProperties } from "../useContext/StateProperties";
import { UseHookModal } from "../useContext/StateModal";
const Card = ({ id, name, image, location, precio }) => {
  const [favorite, setaddfavorite] = useState(false);
  const { showProperty } = UseHookProperties();
  const { toggleModal } = UseHookModal();

  const changebtn = () => {
    setaddfavorite(!favorite);
  };

  const qualification = () => {
    const start = Math.floor(Math.random() * 4) + 2;
    const notStart = Array(5 - start).fill("#");
    return Array(start).fill("*").concat(notStart);
  };

  const showDetail = ({ target }) => {
    showProperty(target.id);
    toggleModal();
  };

  return (
    <div id="acr" className="card">
      <div className="card_content">
        <img
          onClick={showDetail}
          id={id}
          src={image}
          alt={name}
          draggable="false"
        />
        <span className="card_price d-flex">
          <div className="d-flex icons-start">
            {qualification().map((ele, i) =>
              ele === "*" ? (
                <AiFillStar className="active" key={i} />
              ) : (
                <AiOutlineStar key={i} />
              )
            )}
          </div>
          $: {precio}
        </span>
      </div>
      <div className="d-content d-flex">
        <span className="sub-title">Departamento</span>
        <figcaption className="title">
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </figcaption>
        <div className="d-flex start">
          <MdLocationPin className="icon-success" />
          <span className="text-sm text-slate-500">{location}</span>
        </div>
        <div className={`btn_add d-flex ${!favorite && "no-favorite"}`}>
          <button className="favorite d-flex" onClick={changebtn}>
            {favorite ? <MdFavorite /> : <MdFavoriteBorder />}
            {favorite ? "Quitar" : "Agregar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
