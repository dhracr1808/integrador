import React from "react";
import { IoMdClose } from "react-icons/io";
import { UseHookModal } from "../useContext/StateModal";
import userImage from "./../assets/user.jpg";
const Contact = ({ toggle }) => {
  const { toggleModal } = UseHookModal();
  const handdleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form p-auto">
      <h1 className="title text-center">Contacta a elissa Peralta</h1>
      <div className="form-header">
        <div className="grid-2">
          <div className="content_img ver-hid d-flex">
            <div className="content_img_perfil">
              <img className="perfil" src={userImage} alt={userImage} />
            </div>
          </div>
          <div className="dellaess">
            <h3 className="title">nombre user</h3>
            <h3 className="sub_title">999984545</h3>
            <span className="text-sm text-slate-400">
              diegohrojas@gmail.com
            </span>
          </div>
        </div>
      </div>
      <form className="" onSubmit={handdleSubmit}>
        <div className="group-input">
          <input type="text" placeholder="Name" />
        </div>
        <div className="group-input">
          <input type="email" placeholder="Email" />
        </div>
        <div className="group-input">
          <input type="number" placeholder="Phone Number" />
        </div>
        <div className="group-input">
          <textarea placeholder="Message"></textarea>
        </div>
        <div className="form_footer d-flex">
          <button onClick={toggle} className="cancel">
            Cancelar
          </button>
          <button type="submit">Enviar</button>
        </div>
      </form>
      <div onClick={toggleModal} className="close d-flex">
        <IoMdClose />
      </div>
    </div>
  );
};

export default Contact;
