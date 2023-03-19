import React, { useState } from "react";
import DishCard, { IDishProps } from "../../../general/dish_card/DishCard";
import "./DishModal.css";

interface ModalProps {
  dish: IDishProps | null;
  isModalOpen: boolean;
  onClose: () => void;
}

const DishModal: React.FC<ModalProps> = ({ isModalOpen, onClose, dish }) => {
  const [count, setCount] = useState(1);
  return isModalOpen ? (
    <div className="modal-overlay">
      <div className="close-modal-box">
        <button className="close-modal" onClick={() => onClose()}>
          <img src="./images/general/CloseModal.svg" alt="close-modal" />
        </button>
      </div>
      <div className="dish-modal-main">
        {dish && (
          <DishCard
            key={dish.id}
            name={dish.name}
            icons={dish.icons}
            price={dish.price}
            img={dish.img}
            about={dish.about}
            className={"modal-dish-card-info"}
            id={dish.id}
          />
        )}
        <div className="side-dish">
          <div className="input-modal-box">
            <div className="title-modal">Choose a side</div>
            <div className="input-modal-choose">
              <div>
                <input type="radio" />
                <label> White bread </label>
              </div>
              <br />
              <div>
                <input type="radio" />
                <label> Sticky rice </label>
              </div>
            </div>
          </div>
          <div className="input-modal-box">
            <div className="title-modal">Changes</div>
            <div className="input-modal-choose">
              <div>
                <input type="checkbox" />
                <label> Whithout peanuts </label>
              </div>
              <br />
              <div>
                <input type="checkbox" />
                <label> Sticky Less spicy </label>
              </div>
            </div>
          </div>
          <div className="input-modal-box">
            <div className="title-modal">Quantity </div>
            <div className="btn-container">
              <button
                className="control-btn"
                onClick={() => {
                  count == 0 ? setCount(count) : setCount(count - 1);
                }}
              >
                <img src="./images/general/plus.svg" alt="plus" />
              </button>
              <p>{count}</p>
              <button
                className="control-btn"
                onClick={() => setCount(count + 1)}
              >
                <img src=" ./images/general/minus.svg" alt="minus" />
              </button>
            </div>
          </div>

          <div>
            <button className="add-to-bag">Add to bag</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default DishModal;
