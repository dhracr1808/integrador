import React, { useState } from "react";
import { UseHookUser } from "../useContext/stateUsers";
import llaveLogin from "./../assets/llave.jpg";
import { IoMdClose } from "react-icons/io";
import { UseHookModal } from "../useContext/StateModal";
import { BiLoaderCircle } from "./../icons";
import { btnStyle } from "../utils/styles";

const Loggin = () => {
  const { changeOptions, option } = UseHookModal();
  const { toggleModal } = UseHookModal();
  const [form, setForm] = useState({});

  const changeForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const { sendLoggin } = UseHookUser();
  const handdleSubmit = (e) => {
    e.preventDefault();
    if (!option) return;
    changeOptions();
    sendLoggin(form);
  };
  return (
    <div className="form grid-h p-auto op-n">
      <div className="img_form ver-hid">
        <h3 className="title text-center text-l">Loggin</h3>
        <img src={llaveLogin} alt={llaveLogin} />
      </div>
      <form onSubmit={handdleSubmit}>
        <div className="group-input">
          <input
            name="email"
            value={form.name}
            onChange={changeForm}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="group-input">
          <input
            name="password"
            value={form.name}
            onChange={changeForm}
            type="password"
            placeholder="password"
          />
        </div>
        <div className="form_footer  d-flex">
          <button
            style={option ? btnStyle.active : btnStyle.desactive}
            className="w-full d-flex "
          >
            {option ? "Ingresar" : <BiLoaderCircle className="animate-spin" />}
          </button>
        </div>
      </form>
      <div onClick={toggleModal} className="close d-flex">
        <IoMdClose />
      </div>
    </div>
  );
};

export default Loggin;
