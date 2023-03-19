import React from "react";
import "./ChefCard.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { IrestaurantsState, IrestPorps } from "../rest_card/RestCard";

export interface IChefState {
  value: IChefProps[];
}
export interface IChefProps {
  img: string;
  description?: string;
  chefName?: string;
  restsName?: number[] | any;
  chefOfTheWeek?: boolean;
  name?: string;
  restaurant?: string;
  newChef?: boolean;
  mostViwe?: boolean;
}

const ChefCard: React.FC<IChefProps> = (props) => {
  const restaurants = useSelector(
    (state: RootState) => state.restaurants.filteredValue
  );

  const chef = {
    img: props.img,
    description: props.description,
    chefName: props.chefName,
    restsName: props.restsName,
  };

  let chefRast: Array<{ id: number }> = [];
  restaurants.filter((rest: any) => {
    const restToChef = chef.restsName?.map((chefrest: number) => {
      if (chefrest === rest.id) chefRast.push(rest);
    });

    return chefRast;
  });

  return (
    <div className="chef-card">
      <div className="chef-card-info">
        <img className="chef-img" src={`${chef.img}`} />
        <p className="chef-card-description">{chef.description}</p>
      </div>
      <div className="chef-card-">
        <p className="chef-name">{chef.chefName}’s Restaurants</p>
        <div className="chef-card-all-rests">
          {chefRast.map((restobj: any, index: number) => (
            <div className="rest-card home-page" key={index}>
              <img className="rest-img home-page" src={`${restobj.img}`} />
              <p className="rest-name home-page-name">{restobj.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChefCard;
