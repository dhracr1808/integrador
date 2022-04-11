import { UseHookProperties } from "../useContext/StateProperties";
import casa from "./../assets/casa.jpg";
import { IoMdClose } from "react-icons/io";
import { UseHookModal } from "../useContext/StateModal";
import {
  AiFillStar,
  AiOutlineStar,
  MdFavorite,
  /* MdFavoriteBorder, */
} from "./../icons";
import { BiCheckCircle } from "react-icons/bi";
import { IoCloseCircleOutline } from "react-icons/io5";

const Detail = ({ toggle }) => {
  const { property } = UseHookProperties();
  const { image, description, name, price, available } = property;
  const { toggleModal } = UseHookModal();
  return (
    <div className="contentdetail">
      <div className="contentdetail_img">
        <img src={image?.secure_url || casa} alt={name} />
      </div>
      <div className="contentdetail_description ">
        <h2 className="title text-l">{name}</h2>
        <span className="sub_title">casa</span>
        <div className="d-flex start icons-start">
          <span className="sub_title_alt">${price}</span>
          <hr className="hr_vert" />
          <AiFillStar className="active" />
          <AiFillStar className="active" />
          <AiFillStar className="active" />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <div className="d-flex start icons-start">
          <span className="text-slate-500 text-sm">Available:</span>
          {available ? <BiCheckCircle /> : <IoCloseCircleOutline />}
        </div>
        <div className="description">
          <div className="description_content">
            <span className="text-slate-400">Descripción</span>
            <p className="text-slate-500">{description}</p>
          </div>
        </div>
        <div className="description  description_small ">
          <div className="btn_add d-flex">
            <button className="favorite">
              <MdFavorite /> {/* <MdFavoriteBorder /> */}
              Agregar
            </button>
          </div>
          <div className="contact_btn d-flex">
            <button onClick={toggle} className="contact-btn d-flex">
              Contacto
            </button>
          </div>
        </div>
      </div>

      <div onClick={toggleModal} className="close d-flex">
        <IoMdClose />
      </div>
    </div>
  );
};

export default Detail;
