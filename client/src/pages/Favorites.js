import React from "react";
import { MdOutlineFavorite, IoAddOutline } from "./../icons";
import userImg from "./../assets/user.jpg";
import { UseHookUser } from "../useContext/stateUsers";
import { UseHookFavorites } from "../useContext/stateFavorite";
import MinCard from "../commons/MinCard";
import { Link } from "react-router-dom";
const Favotite = () => {
  const { user } = UseHookUser();
  const { favorites } = UseHookFavorites();
  return (
    <div className="container_grid">
      <aside></aside>
      <div className="content_main">
        <section className="section">
          <div className="section_header">
            <div className="section_header_left d-flex">
              <div className="iconFavorite  d-flex">
                <MdOutlineFavorite />
              </div>
            </div>
            <div className="section_header_rigth">
              <h1 className="title text-s">Tu lista de deseos</h1>
              <div className="d-flex start">
                <div className="img_perfil">
                  <img className="perfil" src={userImg} alt={userImg} />
                </div>
                <span className="sub_title">{user.email}</span>
                {favorites[0] ? (
                  <span className="text-gray-400">
                    {favorites.length}
                    {favorites[1] ? " elementos" : " elemento"}
                  </span>
                ) : (
                  <span className="text-gray-400"> lista vacia</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {favorites[0] ? <ElementsFavorite /> : <ListEmpty />}
        <section className="section"></section>
      </div>
    </div>
  );
};

const ElementsFavorite = () => {
  const { favorites } = UseHookFavorites();

  return (
    <section className="section content_grid_alt">
      {favorites.map(({ id, name, image, price }) => (
        <MinCard
          key={id}
          id={id}
          name={name}
          image={image?.secure_url || userImg}
          price={price}
        />
      ))}
    </section>
  );
};

const ListEmpty = () => {
  return (
    <section className="section">
      <h3 className="title text-center">Tu lista de favoritos esta vacia</h3>
      <figcaption className="sub_title text-xs text-center mb-4">
        Click en el botón para ir a inicio
      </figcaption>
      <div className="listempty d-flex">
        <Link to="/#acr">
          <button className="btn-add">
            <IoAddOutline />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Favotite;
