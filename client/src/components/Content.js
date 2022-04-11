import Card from "../commons/Card";
import { UseHookProperties } from "../useContext/StateProperties";
import Detail from "../commons/Detail";
import Modal from "./Modal";
import casa from "./../assets/casa.jpg";
import { UseHookModal } from "../useContext/StateModal";
import Contact from "./Contact";

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
      {modal && <Modal content={<ViewModal />} />}
    </>
  );
};

const ViewModal = () => {
  const toggleView = () => {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("active");
  };
  return (
    <>
      <Detail toggle={toggleView} />
      <Contact toggle={toggleView} />
    </>
  );
};

export default Content;
