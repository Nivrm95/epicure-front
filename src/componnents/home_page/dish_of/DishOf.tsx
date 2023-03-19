import React, { useEffect, useState } from "react";
import "./DishOf.css";
import DishCard, { IDishProps } from "../../general/dish_card/DishCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import DishModal from "../../restaurants_page/singel_restaurants_page/dish_modal/DishModal";

const DishOf: React.FC = () => {
  const dishes = useSelector((state: RootState) => state.dishes.value);
  const [dishOfArray, setDishOfArray] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDish, setSelectedDish] = useState<IDishProps | null>(null);


  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onCardDishClick = (dishId: number) => {
    openModal();
    const findDish = dishes.filter((dish: IDishProps) => dish.id === dishId)[0];
    setSelectedDish(findDish);
  };

  useEffect(() => {
    const dishOf = dishes.slice(0, 3);
    setDishOfArray(dishOf);
  }, []);

  return (
    <div className="dish-of-container">
      <div className="dish-of-titel">signature dish of:</div>
      <div className="dish-of-main-box">
        <div className="dish-of-all-cards">
          {dishOfArray.map((dish: IDishProps, index: number) => (
            <DishCard
              key={index}
              img={dish.img}
              name={dish.name}
              icons={dish.icons}
              about={dish.about}
              price={dish.price}
              id={dish.id}
              onClick={() => onCardDishClick(dish.id)}
            />
          ))}

          <DishModal
            isModalOpen={isModalOpen}
            dish={selectedDish}
            onClose={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default DishOf;
