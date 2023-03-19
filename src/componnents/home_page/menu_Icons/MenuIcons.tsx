import React from "react";
import "./MenuIcons.css";

const MenuIcons: React.FC = () => {
  return (
    <div className="icon-container">
      <span className="icons-titel">THE MEANING OF OUR ICONS:</span>
      <div className="icons-box">
        <img
          src="/images/general/iconsMneu_images/SpicyIcon.svg"
          alt="spicyIcon"
        />
        <img
          src="/images/general/iconsMneu_images/VeganIcon.svg"
          alt="VeganIcone"
        />
        <img
          src="/images/general/iconsMneu_images/VegitarianIcon.svg"
          alt="VegitarianIcon"
        />
      </div>
    </div>
  );
};

export default MenuIcons;
