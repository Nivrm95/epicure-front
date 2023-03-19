import { createSlice } from "@reduxjs/toolkit";
import { IDishProps } from "../../componnents/general/dish_card/DishCard";

const allDishes = fetch("http://localhost:8000/dishes")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err.message);
  });

const dishes: IDishProps = await allDishes;
export const dichSlices = createSlice({
  name: "dishes",
  initialState: {
    value: dishes,
  },
  reducers: {},
});

export default dichSlices.reducer;
