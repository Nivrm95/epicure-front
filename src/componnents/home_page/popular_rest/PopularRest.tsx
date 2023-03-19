import React, { useEffect, useState } from "react";
import "./PopularRest.css";
import { useNavigate } from "react-router-dom";
import RestCard from "../../general/rest_card/RestCard";
import { useDispatch, useSelector } from "react-redux";
import { filterRestaurants } from "../../../store/slices/resturantsSlices";
import { RootState } from "../../../store/store";

const PopularRest: React.FC = () => {
  const restaurants = useSelector((state: RootState) => state.restaurants.filteredValue);
  const navigat = useNavigate();
  const [popularRestArray, setPopularRestArray] = useState<any[]>([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const popularRestaurants = restaurants
      .slice(0, 3);
    setPopularRestArray(popularRestaurants);
  }, []);

  return (
    <div className="rest-container">
      <div className="rest-titel">popular restaurant in epicure:</div>
      <div className="rest-container-main-box">
        <div className="all-cards">
          {popularRestArray.map((rest, idx) => (
            <RestCard
              key={idx}
              img={rest.img}
              name={rest.name}
              rating={rest.rating}
              chef={rest.chef}
              className={""}
              id= {rest.id}
            />
          ))}
        </div>
        <div>
          <button
            className="all-restaurants-btn"
            onClick={() => {
              navigat("/restaurantsPage")
              dispatch(filterRestaurants("all"))
            }
            }
          >
            All restaurants
            <img
              className="all-restaurants-img"
              src="./images/general/Vector.svg"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularRest;
