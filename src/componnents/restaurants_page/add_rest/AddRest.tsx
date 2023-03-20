import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../general/input/TextInput";
import "./AddRest.css";

interface IAddRestProps {
  setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddRest: React.FC<IAddRestProps> = ({ setShowAddModal }) => {
  const navigat = useNavigate();

  const handSaveRest = async (e: any) => {
    e.preventDefault();
    const credentials: any = {
      id: 0,
      name: "",
      address: [],
      chef: "",
      chefId: 0,
      openHours: [],
      openDays: [],
      openYear: 0,
      img: "",
      dishes: [],
      rating: "",
      popular: "",
      newRest: "",
    };

    const inputObj = e.target;
    Object.values(inputObj).forEach((obj: any) => {
      switch (obj.name) {
        case "id":
        case "openYear":
        case "chefId":
          credentials[obj.name] = Number(obj.value);
          break;
        case "newRest":
        case "popular":
          credentials[obj.name] = Boolean(obj.value);
          break;
        case "address":
          credentials[obj.name] = obj.value.split(",").map(String);
          break;
        case "openDays":
        case "dishes":
        case "openHours":
          credentials[obj.name] = obj.value.split(",").map(Number);
          break;
        case "rating":
          switch (obj.value) {
            case "1":
              credentials[obj.name] = "./images/rating_images/1 star.svg";
              break;
            case "2":
              credentials[obj.name] = "./images/rating_images/2 stars.svg";
              break;
            case "3":
              credentials[obj.name] = "./images/rating_images/3 stars.svg";
              break;
            case "4":
              credentials[obj.name] = "./images/rating_images/4 stars.svg";
              break;
            case "5":
              credentials[obj.name] = "./images/rating_images/5 stars.svg";
              break;
            default:
              break;
          }
          break;
        default:
          credentials[obj.name] = obj.value;
          break;
      }
      console.log(obj.value);
    });

    console.log(credentials);
    // const { data } = await axios.post(
    //   "https://niv-epicure-back.onrender.com/restaurants",
    //   credentials
    // );
    try {
      const { data } = await axios.post(
        "http://localhost:8000/restaurants",
        credentials
      );
      navigat("/RestaurantsPage");
      window.location.reload();
    } catch (err: any) {
      console.log(err);
      alert(err.response.data);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="close-modal-box">
        <button className="close-modal" onClick={() => setShowAddModal(false)}>
          <img src="./images/general/CloseModal.svg" alt="close-modal" />
        </button>
        <form className="add-rest-form" onSubmit={handSaveRest}>
          <div className="title-modal">Add Restaurant Porm</div>
          <TextInput label={"id"} name={"id"} />
          <TextInput label={"name"} name={"name"} />
          <TextInput label={"address"} name={"address"} />
          <TextInput label={"chef"} name={"chef"} />
          <TextInput label={"chefId"} name={"chefId"} />
          <TextInput label={"Open Hours"} name={"openHours"} />
          <TextInput label={"Open Days"} name={"openDays"} />
          <TextInput label={"Open Year"} name={"openYear"} />
          <TextInput label={"img"} name={"img"} />
          <TextInput label={"Dishes"} name={"dishes"} />
          <TextInput label={"Popular rest?"} name={"popular"} />
          <TextInput label={"New Rest?"} name={"newRest"} />

          {/* <TextInput label={"Rating"} name={"rating"} /> */}
          <div>
            <div className="title-modal">Rating </div>
            <input type="radio" id="star1" name="rating" value="1" />
            <label htmlFor="star1"> 1 star </label>
            <input type="radio" id="star2" name="rating" value="2" />
            <label htmlFor="star2"> 2 stars </label>
            <input type="radio" id="star3" name="rating" value="3" />
            <label htmlFor="star3"> 3 stars </label>
            <input type="radio" id="star4" name="rating" value="4" />
            <label htmlFor="star4"> 4 stars </label>
            <input type="radio" id="star5" name="rating" value="5" />
            <label htmlFor="star5"> 5 stars </label>
          </div>
          <div className="buttons-form">
            <button
              className="btu-singel"
              onClick={() => setShowAddModal(false)}
            >
              Cancel
            </button>
            <button className="btu-singel" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddRest;
