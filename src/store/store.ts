import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./slices/resturantsSlices"
import chefsReducer from "./slices/chefSlices"
import dishesReducer from "./slices/dichsSlices"
import { IrestaurantsState } from "../componnents/general/rest_card/RestCard";
import {IDishState} from "../componnents/general/dish_card/DishCard";
import { IChefState } from "../componnents/general/chef_card/ChefCard";
import userSlice from "./slices/userSlice";

export interface IUserState{
  value: IUser[],
  logInUser: IUser
}

export interface IUser {
  reducer: any;
  firstName: string,
  lastName: string,
  email: string,
  userName: string,
  password: string,
  token?: string
  role:string,
}


export interface RootState {
  restaurants: IrestaurantsState  ;
  chefs: IChefState;
  dishes: IDishState;
  users: IUserState;
}


export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    chefs: chefsReducer,
    dishes: dishesReducer,
    users: userSlice,
  },
});


