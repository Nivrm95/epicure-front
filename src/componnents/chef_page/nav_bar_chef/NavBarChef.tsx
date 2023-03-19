import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterChefs } from "../../../store/slices/chefSlices";
import "./NavBarChef.css";

interface InavBarItem {
  name: string;
  value: string;
}

const NavBarChef: React.FC = () => {
  const dispatch = useDispatch();
  const chefs = useSelector((state: {chefs: {value: string[]}}) => state.chefs.value);
  const [boldButton, setboldButton] = useState<string>("all");

  const navBarItemsChef: InavBarItem[] = [
    { name: "All", value: "all" },
    { name: "New", value: "new" },
    { name: "Most View", value: "most" },
  ];

  const handleNavBarChefClick = (navItamValue: string) => {
    setboldButton(navItamValue);
    dispatch(filterChefs(navItamValue));
  };

  const getButtonBold = (buttonType: string) =>
    `nav-bar-chef-btn${boldButton === buttonType ? " bold" : ""}`;

  return (
    <div className="nav-bar-chef-all-btn">
      {navBarItemsChef.map((navItam: InavBarItem) => (
        <button
          key={navItam.value}
          className={getButtonBold(navItam.value)}
          onClick={() => handleNavBarChefClick(navItam.value)}
        >
          {navItam.name}
        </button>
      ))}
    </div>
  );
};
export default NavBarChef;
