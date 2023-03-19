import React from "react";
import "./ChefImagesCard.css";

interface Iprops {
  img: string;
}


const ChefImagesCard: React.FC<Iprops> = (props) => {
  const chef = {
    img: props.img,
  };

  return <img className="chef-page-chef-img-card" src={`${chef.img}`} />;
};

export default ChefImagesCard;
