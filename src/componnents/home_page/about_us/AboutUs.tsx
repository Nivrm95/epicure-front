import React from "react";
import "./AboutUs.css";
const AboutUs: React.FC = () => {
  return (
    <div className="abuot-container">
      <div className="left-abuot-main">
            <div className="about-title">about us:</div>
            <span className="about-main-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
            eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
            porta. Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum
            bibendum no eu ipsum. Cras porta malesuada eros.
            </span>
            <div className="buttons-store">
            <button>
                <img src="./images/general/AppStore.svg" alt="" />
            </button>
            <button>
                <img src="./images/general/GooglePlay.svg" alt="" />
            </button>
            </div>
        </div>

      <div className="right-abuot-main">
            <div className="epicure-logo">
            <img src="./images/general/EpicureLogo.svg" alt="" />
            </div>
        </div>  
    </div>
  );
};

export default AboutUs;
