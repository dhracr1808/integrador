import React, { useState } from "react";
import { IoMdClose } from "./../icons";
import { UseHookModal } from "../useContext/StateModal";
import { UseHookUser } from "../useContext/stateUsers";

const Register = () => {
  const [form, setForm] = useState({});
  const { toggleModal } = UseHookModal();

  const { register } = UseHookUser();

  const changeForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handdleSubmit = (e) => {
    e.preventDefault();
    register(form);
  };

  return (
    <div className="form   p-auto op-n">
      <h3 className="title text-center text-l">Create Acount</h3>
      <form onSubmit={handdleSubmit}>
        <div className="group-input">
          <input
            name="username"
            value={form.name}
            onChange={changeForm}
            type="text"
            placeholder="Insert Username"
          />
        </div>
        <div className="group-input">
          <input
            name="email"
            value={form.name}
            onChange={changeForm}
            type="email"
            placeholder="Insert Email"
          />
        </div>
        <div className="group-input">
          <input
            name="password"
            value={form.name}
            onChange={changeForm}
            type="password"
            placeholder="Insert password"
          />
        </div>
        <div className="group-input">
          <input
            name="password"
            value={form.name}
            onChange={changeForm}
            type="password"
            placeholder="Repeat password"
          />
        </div>
        <div className="form_footer  d-flex">
          <button className="w-full">Create Acount</button>
        </div>
      </form>
      <div onClick={toggleModal} className="close d-flex">
        <IoMdClose />
      </div>
    </div>
  );
};

export default Register;
