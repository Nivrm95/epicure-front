import React from "react";
import "./DishCard.css";

export interface IDishState {
  value: IDishProps[];
}

export interface IDishProps {
  id: number;
  img?: string;
  name?: string;
  icons?: string[] | [];
  about?: string;
  price?: number;
  className?: string;
  onClick?: (id: number) => void;
  time?: string[];
}

const DishCard: React.FC<IDishProps> = (props) => {
  const dish = {
    id: props.id,
    img: props.img,
    name: props.name,
    icons: props.icons,
    about: props.about,
    price: props.price,
    className: props.className,
  };

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(dish.id);
    }
  };

  return (
    <div className={`dish-card ${props.className}`} onClick={handleClick}>
      <img className={`dish-img ${props.className}`} src={`${dish.img}`} />
      <div className={`dish-info ${props.className}`}>
        <div className={`dish-name ${props.className}`}>{dish.name}</div>
        <div className="icons">
          {dish.icons?.length !== 0
            ? dish.icons?.map((dishIcon: string, index: number) => (
                <img
                  key={index}
                  className={`icon-img ${props.className}`}
                  src={`${dishIcon}`}
                />
              ))
            : null}
        </div>
        <p className={`description ${props.className}`}>{dish.about}</p>
        <div className={`price ${props.className}`}>
          {dish.price ? (
            <div className="price">
              <hr />
              {"₪" + dish.price}
              <hr />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DishCard;
