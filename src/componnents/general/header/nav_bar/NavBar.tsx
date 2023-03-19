import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterRestaurants } from "../../../../store/slices/resturantsSlices";
import { filterChefs } from "../../../../store/slices/chefSlices";
import ShopCart from "../../shop_cart/ShopCart";
import HamburgerNavBar from "../hamburger_nav_bar/HamburgerNavBar";
import { RootState } from "../../../../store/store";


const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigat = useNavigate();
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShoppingBtnClick = () => {
    setShowModal((prev) => !prev);
  };
  const logInUser = useSelector((state: RootState) => state.users.logInUser);

  
  return (
    <div>
      <header>
        <HamburgerNavBar />
        <button className="main-logo-mobile" onClick={() => navigat("/")}>
          <img src={"/images/header_images/EpicureLogoMobile.svg"} alt="logo" />
        </button>
        <nav className="left-nav-bar">
          <button className="main-logo" onClick={() => navigat("/")}>
            <img src={"/images/header_images/MainLogo.svg"} alt="logo" />
          </button>
          <NavLink
            to="/RestaurantsPage"
            onClick={() => dispatch(filterRestaurants("all"))}
            className={({ isActive }) => (isActive ? "undeline" : "notActive")}
          >
            Restaurants
          </NavLink>
          <NavLink
            to="/ChefPage"
            onClick={() => dispatch(filterChefs("all"))}
            className={({ isActive }) => (isActive ? "undeline" : "notActive")}
          >
            Chefs
          </NavLink>
        </nav>
          <div className="logInUesr">
            {logInUser.firstName ? `Hello ${logInUser.firstName}` : ""}
          </div>

        <nav className="right-nav-bar">
          <div className="search-box">
            <input
              id="searchText"
              className={showSearchInput ? "search-text show" : "search-text"}
              type="text"
              placeholder="Search for restaurant cuisine, chef"
            ></input>
            <button
              id="searchBtn"
              className="search-btn"
              onClick={() => setShowSearchInput(!showSearchInput)}
            >
              <img
                src="/images/header_images/SearchIcon.svg"
                alt="SearchIcon"
              />
            </button>
          </div>
          <div className="shopping-box">
            <button className="shopping-btn" onClick={handleShoppingBtnClick}>
              <img
                src="/images/header_images/ShoppingIcon.svg"
                alt="ShoppingIcon"
              />
            </button>
          </div>
          <div className="personal-icon">
            <button className="personal-btn" onClick={() => navigat("/SingIn")}>
              <img
                src="/images/header_images/PersonalIcon.svg"
                alt="PersonalIcon"
              />
            </button>
            {showModal && (
              <div>
                <ShopCart />
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
