import React from "react";
import "./RestCard.css";
import { useNavigate } from "react-router-dom";
import { ObjectId } from "mongoose";

export interface IrestaurantsState {
  filteredValue: IrestPorps[];
  value: IrestPorps[];
}
export interface IrestPorps {
  filter(
    arg0: (restaurant: any) => boolean
  ): import("immer/dist/internal").WritableDraft<IrestPorps>;
  _id?:any;
  img?: string;
  name?: string;
  chef?: string;
  rating?: string;
  className?: string;
  id?: number;
  address?: string[];
  chefId?: number;
  openHours?: number[] | undefined;
  openDays?: number[] | undefined;
  openYear?: number;
  dishes?: [];
  popular?: false;
  openNow?: boolean;
}

export type popularProps = {
  img?: string;
  name?: string;
  chef?: string;
  rating?: string;
  className?: string;
  id?: number;
  address?: string[];
  chefId?: number;
  openHours?: number[];
  openDays?: number[];
  openYear?: number;
  dishes?: [];
  popular?: false;
  openNow?: string;
};

const RestCard: React.FC<popularProps> = (props) => {
  const navigat = useNavigate();
  const rest = {
    img: props.img,
    name: props.name,
    chef: props.chef,
    rating: props.rating,
    className: props.className,
    id: props.id,
    address: props.address,
    chefId: props.chefId,
    openHours: props.openHours,
    openDays: props.openDays,
    openYear: props.openYear,
    dishes: props.dishes,
    popular: props.popular,
    openNow: props.openNow,
  };

  return (
    <div
      onClick={() => navigat(`/${rest.id}`)}
      className={`rest-card ${props.className}`}
    >
      <div>
        <img className={`rest-img ${props.className}`} src={`${rest.img}`} />
      </div>
      <div className="rest-info">
        <div className={`rest-name ${props.className}`}>{rest.name}</div>
        <div className={`rest-chef-name ${props.className}`}>{rest.chef}</div>
        {rest.rating ? (
          <img className={"rating-img"} src={`${rest.rating}`} />
        ) : null}
        {rest.openNow ? (
          <div className="open-now-box">
            <img
              src="./images/general/OpenNowIcon.svg"
              className="open-now-icon"
            />{" "}
            <div>{rest.openNow}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RestCard;
