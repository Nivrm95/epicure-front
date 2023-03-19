import React from "react";
import "./HamburgerNavBar.css";
import { NavLink } from "react-router-dom";
import { filterChefs } from "../../../../store/slices/chefSlices";
import { filterRestaurants } from "../../../../store/slices/resturantsSlices";
import { useDispatch } from "react-redux";

const HamburgerNavBar: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <section className="mobile-nav">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>
          <NavLink
            onClick={() => dispatch(filterRestaurants("all"))}
            className="notActive"
            to={"/RestaurantsPage"}
          >
            Restaurants
          </NavLink>
        </li>
        <li className="chef-mobile-button">
          <NavLink
            onClick={() => dispatch(filterChefs("all"))}
            className="notActive"
            to={"/ChefPage"}
          >
            Chefs
          </NavLink>
        </li>
        <li>
          <button className="contact-us">Contact Us</button>
        </li>
        <li>
          <button className="term-of-use">Term of Use</button>
        </li>
        <li>
          <button className="privacy-policy">Privacy Policy</button>
        </li>
      </ul>
    </section>
  );
};

export default HamburgerNavBar;
