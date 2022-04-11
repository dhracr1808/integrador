import React from "react";
import { UseHookUser } from "../useContext/stateUsers";

const Loggin = () => {
  const { loggin } = UseHookUser();
  const handdleSubmit = (e) => {
    e.preventDefault();
    loggin({ email: "diego@gmail.com", password: "acr" });
  };

  return (
    <div>
      <form onSubmit={handdleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Loggin;
