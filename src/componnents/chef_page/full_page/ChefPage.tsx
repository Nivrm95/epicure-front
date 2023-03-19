import React from "react";
import NavBar from "../../general/header/nav_bar/NavBar";
import ChefImagesCard from "../chef_images_card/ChefImagesCard";
import "./ChefPage.css";
import Footer from "../../general/footer/Footer";
import NavBarChef from "../nav_bar_chef/NavBarChef";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { IChefProps } from "../../general/chef_card/ChefCard";



const ChefPage: React.FC = () => {
  const chefs = useSelector(
    (state: RootState) => state.chefs.value
  );
  return (
    <div>
      <NavBar />
      <NavBarChef />
      <div className="chef-page-all-imgs">
        {chefs.map((chef:IChefProps, index:number) => (
          <ChefImagesCard key={index} img={chef.img} />
        ))}
      </div>
        <Footer />
    </div>
  );
};

export default ChefPage;
