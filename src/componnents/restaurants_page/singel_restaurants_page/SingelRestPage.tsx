import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DishCard, {
  IDishProps,
  IDishState,
} from "../../general/dish_card/DishCard";
import Footer from "../../general/footer/Footer";
import NavBar from "../../general/header/nav_bar/NavBar";
import RestCard, { IrestPorps } from "../../general/rest_card/RestCard";
import NavBarSingelRest from "./nav_bar_singel_rest/NavBarSingelRest";
import DishModal from "./dish_modal/DishModal";
import "./SingelRestPage.css";
import { RootState } from "../../../store/store";
import { isOpenNow } from "../../../utils/Utils";
import axios from "axios";

const SingelRestPage: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState("all");
  const [selectedDish, setSelectedDish] = useState<IDishProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const restaurants = useSelector(
    (state: RootState) => state.restaurants.value
  );
  const dishes = useSelector((state: RootState) => state.dishes.value);
  const RestID = useParams();
  const navigat = useNavigate();

  const logInUser = useSelector((state: RootState) => state.users.logInUser);
  console.log(logInUser.role);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectedRestaurant = restaurants.find(
    (rest: IrestPorps) => RestID.RestId == rest.id
  );

  if (!selectedRestaurant) {
    return <div>Error: Restaurant not found</div>;
  }

  let restDIsh: IDishProps[] = [];
  const selectedDishes = selectedRestaurant?.dishes?.map(
    (dishInRest: number) => {
      const dishId = dishes.filter((dish: IDishProps) => {
        return dish.id === dishInRest && dish.time?.includes(selectedTime);
      });

      if (dishId[0]) restDIsh.push(dishId[0]);
      return dishId[0];
    }
  );

  const allDishesRest = selectedRestaurant?.dishes?.map(
    (dishInRest: number) => {
      const dishRestAll = dishes.filter(
        (dish: IDishProps) => dish.id === dishInRest
      );
      return dishRestAll[0];
    }
  );

  const onCardDishClick = (dishId: number) => {
    openModal();
    const findDish = dishes.filter((dish: IDishProps) => dish.id === dishId)[0];
    setSelectedDish(findDish);
  };

  // const handleDeleteRest = async (id: any) => {
  //   const body : any=id
  //   try {
  //         const res = await axios.delete(
  //       `https://niv-epicure-back.onrender.com/restaurants/${id}`, body );
  //     console.log("delete");
  //     if (res.data.success ){
  //     }
  //     navigat("/RestaurantsPage");
  //     window.location.reload();
  //   } catch (err: any) {
  //     console.log(err);
  //   }
  // };
  const handleDeleteRest = async (restObj: any) => {
    try {
      const foundDishes = await axios.get(
        // `https://niv-epicure-back.onrender.com/dishes?restaurantId=${restObj._id}`
        `http://localhost:8000/dishes?restaurantId=${restObj._id}`
      );
      console.log(foundDishes);
      console.log(foundDishes.data);
      console.log(restObj.dishes);

      restObj.dishes.map(async (dishId: any) => {
        const filterObj = foundDishes.data.filter(
          (dish: any) => dish.id === dishId
        )[0];
        console.log(filterObj);
        const dishRes = await axios.delete(
          // `https://niv-epicure-back.onrender.com/dishes/${filterObj._id}`,
          `http://localhost:8000/dishes/${filterObj._id}`,
          {
            data: { ids: filterObj._id },
          }
        );
        console.log(filterObj._id);
        if (dishRes.data.success) {
          console.log("Dish deleted");
        }
      });
      console.log(restObj._id);
      
      const res = await axios.delete(
        // `https://niv-epicure-back.onrender.com/restaurants/${restObj._id}`
        `http://localhost:8000/restaurants/${restObj._id}`,
        {
          data: { ids: restObj._id },
        }
      );
      if (res.data.success) {
        console.log("Restaurant deleted");
      }

      navigat("/RestaurantsPage");
      window.location.reload();
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container-singel-rest">
        <RestCard
          img={selectedRestaurant.img}
          id={selectedRestaurant.id}
          className={"singel-rest-card"}
          name={selectedRestaurant.name}
          chef={selectedRestaurant.chef}
          openNow={
            isOpenNow(selectedRestaurant.openHours, selectedRestaurant.openDays)
              ? "Open now"
              : "Close now"
          }
        />
        {logInUser.role === "admin" && (
          <button
            id="DeleteRest"
            onClick={() => handleDeleteRest(selectedRestaurant)}
          >
            Delete Rest
          </button>
        )}
        <NavBarSingelRest setSelectedTime={setSelectedTime} />
        <div className="all-dishs-singel-rest">
          {selectedTime == "all"
            ? allDishesRest?.map((dish: IDishProps, index: number) => {
                return (
                  <DishCard
                    key={index}
                    name={dish.name}
                    price={dish.price}
                    img={dish.img}
                    icons={dish.icons}
                    about={dish.about}
                    className={"singel-dish-card"}
                    id={dish.id}
                    onClick={() => onCardDishClick(dish.id)}
                  />
                );
              })
            : restDIsh.map((dish: IDishProps, index: number) => {
                return (
                  <DishCard
                    key={index}
                    name={dish.name}
                    price={dish.price}
                    icons={dish.icons}
                    img={dish.img}
                    about={dish.about}
                    className={"singel-dish-card"}
                    id={dish.id}
                    onClick={() => onCardDishClick(dish.id)}
                  />
                );
              })}
        </div>

        <DishModal
          isModalOpen={isModalOpen}
          dish={selectedDish}
          onClose={closeModal}
        />
      </div>
      <Footer />
    </>
  );
};
export default SingelRestPage;
