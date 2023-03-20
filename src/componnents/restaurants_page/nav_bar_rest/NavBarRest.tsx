import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterRestaurants } from "../../../store/slices/resturantsSlices";
import { RootState } from "../../../store/store";
import { IrestPorps } from "../../general/rest_card/RestCard";
import "./NavBarRest.css";
import AddRest from "../add_rest/AddRest";

const NavBarRest: React.FC = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(
    (state: RootState) => state.restaurants.value
  );
  const [boldButton, setboldButton] = useState<string>("all");
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddButtonClick = () => {
    setShowAddModal(true);
  };

  const logInUser = useSelector((state: RootState) => state.users.logInUser);
  console.log(logInUser);
  
  console.log(logInUser.role);

  const navBarItems: { name: string; value: string }[] = [
    { name: "All", value: "all" },
    { name: "New", value: "new" },
    { name: "Most Popular", value: "popular" },
    { name: "Open Now", value: "open" },
    { name: "Map View", value: "map" },
  ];

  const handleNavBarRestClick = (navItamValue: string) => {
    setboldButton(navItamValue);

    if (navItamValue !== "map") {
      dispatch(filterRestaurants(navItamValue));
    }
  };

  const getButtonBold = (buttonType: string) =>
    `nav-bar-rest-btn${boldButton === buttonType ? " bold" : ""}`;

  return (
    <div className="nav-bar-rest-all-btn">
      {navBarItems.map((navItam) => (
        <button
          key={navItam.value}
          className={getButtonBold(navItam.value)}
          onClick={() => handleNavBarRestClick(navItam.value)}
        >
          {navItam.name}
        </button>
      ))}
      {logInUser.role === "admin" && (
        <button
          className="nav-bar-rest-btn-add-rest"
          onClick={handleAddButtonClick}
        >
          Add Restaurant
        </button>
      )}
      {showAddModal && <AddRest setShowAddModal={setShowAddModal} />}
    </div>
  );
};

export default NavBarRest;
