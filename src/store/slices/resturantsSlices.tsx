import { createSlice } from "@reduxjs/toolkit";
import { IrestPorps } from "../../componnents/general/rest_card/RestCard";
import { isOpenNow } from "../../utils/Utils";

const allRestaurant = fetch("http://localhost:8000/restaurants")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err.message);
  });

const restaurant: IrestPorps = await allRestaurant;

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: restaurant,
    filteredValue: restaurant,
  },

  reducers: {
    filterRestaurants: (state, action) => {
      const filterType = action.payload;
      switch (filterType) {
        case "all":
          state.value = restaurant;
          break;
        case "new":
          state.value = restaurant;
          state.value = state.value.filter(
            (restaurant) => restaurant.newRest === true
          );
          break;
        case "popular":
          state.value = restaurant;
          state.value = state.value.filter(
            (restaurant) => restaurant.popular === true
          );
          break;
        case "open":
          state.value = restaurant;
          state.value = state.value.filter((restaurant) => {
            return isOpenNow(restaurant.openHours, restaurant.openDays);
          });
          break;
        default:
          state.value = state.value;
      }
    },
  },
});

export const { filterRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
