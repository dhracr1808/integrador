import Card from "../commons/Card";
import { UseHookProperties } from "../useContext/StateProperties";
import Detail from "../commons/Detail";
import Modal from "./Modal";
import casa from "./../assets/casa.jpg";
import { UseHookModal } from "../useContext/StateModal";

const Content = () => {
  const { properties } = UseHookProperties();
  const { modal } = UseHookModal();

  return (
    <>
      <div className="content_grid">
        {properties.map(({ id, name, image, location, price }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              image={image?.secure_url || casa}
              location={location}
              precio={price}
            />
          );
        })}
      </div>
      {modal && <Modal content={<Detail />} />}
    </>
  );
};

export default Content;
