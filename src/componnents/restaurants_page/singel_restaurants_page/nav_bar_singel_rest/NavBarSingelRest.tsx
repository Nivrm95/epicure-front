import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../../store/store";
import "./NavBarSingelRest.css";

type NavBarSingelRestProps = {
  setSelectedTime: (time: string) => void;
};

const NavBarSingelRest: React.FC<NavBarSingelRestProps> = ({
  setSelectedTime,
}) => {
  const dishes = useSelector((state: RootState) => state.dishes.value);
  const [selectedMealTime, setSelectedMealTime] = useState("all");
  return (
    <div className="nav-bar-single-rest">
      <NavLink
        to=""
        className={selectedMealTime === "Breakfast" ? "undeline" : "notActive"}
        onClick={() => {
          setSelectedMealTime("Breakfast");
          setSelectedTime("Breakfast");
        }}
      >
        Breakfast
      </NavLink>
      <NavLink
        to=""
        className={selectedMealTime === "Lunch" ? "undeline" : "notActive"}
        onClick={() => {
          setSelectedMealTime("Lunch");
          setSelectedTime("Lunch");
        }}
      >
        Lunch
      </NavLink>
      <NavLink
        to=""
        className={selectedMealTime === "Dinner" ? "undeline" : "notActive"}
        onClick={() => {
          setSelectedMealTime("Dinner");
          setSelectedTime("Dinner");
        }}
      >
        Dinner
      </NavLink>
    </div>
  );
};

export default NavBarSingelRest;
