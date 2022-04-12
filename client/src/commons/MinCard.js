import React from "react";
import { IoMdClose } from "./../icons";
import toast from "react-hot-toast";
import Notify from "./Notify";

const MinCard = ({ id, name, description, image, price }) => {
  const handleDelete = (id, name) => {
    toast((t) => <Notify name={name} id={id} t={t} />, {
      style: {
        backgroundColor: "#334155",
      },
    });
  };

  return (
    <div className="mincard ver-hid">
      <h2 className="title">{name}</h2>
      <hr className="line" />
      <div className="mincard_img">
        <img className="img-center" src={image} alt={name} />
        <span className="card_price d-flex">
          <div className="d-flex icons-start"></div>
          $: {price}
        </span>
      </div>
      <div className="mincard_detail">
        <p>{description}</p>
      </div>
      <div onClick={() => handleDelete(id, name)} className="close d-flex">
        <IoMdClose />
      </div>
    </div>
  );
};

export default MinCard;
