import React from "react";
import "./FilterBarRest.css";

const FilterBarRest: React.FC = () => {
  return (
    <div className="filter-barrRest-all-btn">
      <button className="filter-bar-rest-btn">Price Range</button>
      <button className="filter-bar-rest-btn">Distance</button>
      <button className="filter-bar-rest-btn">Rating</button>
    </div>
  );
};
export default FilterBarRest;
