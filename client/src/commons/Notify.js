import React from "react";
import { UseHookFavorites } from "../useContext/stateFavorite";
import toast from "react-hot-toast";

const Notify = ({ id, t, name }) => {
  const { deleteFavorite } = UseHookFavorites();

  return (
    <div className="">
      <p className="text-white text-center">Quitar de la lista a:</p>
      <h2 className="sub_title text-center mb-2.5">{name}</h2>

      <div>
        <button
          className="bg-slate-400 hover:bg-slate-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
          onClick={() => toast.dismiss(t.id)}
        >
          Cancelar
        </button>
        <button
          className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
          onClick={() => {
            deleteFavorite(id);
            toast.dismiss(t.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Notify;
