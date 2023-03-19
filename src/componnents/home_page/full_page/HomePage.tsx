import React from "react";
import NavBar from "../../general/header/nav_bar/NavBar";
import Hero from "../hero/Hero";
import MenuIcons from "../menu_Icons/MenuIcons";
import AboutUs from "../about_us/AboutUs";
import PopularRest from "../popular_rest/PopularRest";
import DishOf from "../dish_of/DishOf";
import Footer from "../../general/footer/Footer";
import ChefWeek from "../chef_week/ChefWeek";

const Home: React.FC = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <PopularRest />
        <DishOf />
        <MenuIcons />
        <ChefWeek />
        <AboutUs />
        <Footer />
    </div>
  );
};

export default Home;

