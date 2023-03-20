import { createSlice } from "@reduxjs/toolkit";
import { IChefProps } from "../../componnents/general/chef_card/ChefCard";

// const allChefs = fetch("https://niv-epicure-back.onrender.com/chefs")
const allChefs = fetch("http://localhost:8000/chefs")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err.message);
  });

const chefs: IChefProps[] = await allChefs;

export const chefSlices = createSlice({
  name: "chefs",
  initialState: {
    value: chefs,
  },
  reducers: {
    filterChefs: (state, action) => {
      const filterType = action.payload;
      switch (filterType) {
        case "all":
          state.value = chefs;
          break;
        case "new":
          state.value = chefs;
          state.value = state.value.filter((chef) => chef.newChef === true);
          break;
        case "most":
          state.value = chefs;
          state.value = state.value.filter((chef) => chef.mostViwe === true);
          break;
        default:
          state.value = state.value;
      }
    },
  },
});

export const { filterChefs } = chefSlices.actions;
export default chefSlices.reducer;
