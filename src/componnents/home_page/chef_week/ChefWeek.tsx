import React, { useEffect, useState } from "react";
import "./ChefWeek.css";
import ChefCard, { IChefProps } from "../../general/chef_card/ChefCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const ChefWeek: React.FC = () => {
  const chefs = useSelector((state: RootState) => state.chefs.value);
  const [chefOfTheWeek, setChefOfTheWeek] = useState<IChefProps | null | undefined>(null);

  useEffect(() => {
    const chef = chefs.find((chef: IChefProps) => chef.chefOfTheWeek);
    setChefOfTheWeek(chef);
  }, []);

  return (
    <div className="chef-week-container">
      <div className="chef-week-titel">Chef of the week:</div>
      <div className="chef-week-main-box">
        {chefOfTheWeek && (
          <ChefCard
            img={chefOfTheWeek.img}
            description={chefOfTheWeek.description}
            chefName={chefOfTheWeek?.name}
            restsName={chefOfTheWeek?.restaurant}
          />
        )}
      </div>
    </div>
  );
};

export default ChefWeek;
