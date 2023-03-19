import React from "react";
import NavBar from "../../../componnents/general/header/nav_bar/NavBar";
import Footer from "../../general/footer/Footer";
import RestCard, { IrestPorps } from "../../general/rest_card/RestCard";
import FilterBarRest from "../filter_bar_rest/FilterBarRest";
import NavBarRest from "../nav_bar_rest/NavBarRest";
import "./Restaurants.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const RestaurantsPage: React.FC = () => {
  const restaurants = useSelector((state: RootState) => state.restaurants.value);


  return (
    <div>
        <NavBar />
        <NavBarRest />
        <FilterBarRest />
      <div className="rest-page-all-card">
        {restaurants.map((rest: IrestPorps, index: number) => (
          <RestCard
            key={index}
            id={rest.id}
            img={rest.img}
            name={rest.name}
            chef={rest.chef}
            rating={rest.rating}
            className="rest-page-one-card"
          />
        ))}
      </div>
        <Footer />
    </div>
  );
};

export default RestaurantsPage;
