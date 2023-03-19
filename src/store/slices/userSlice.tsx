import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../../back/src/model/users.model";



const allUsers = fetch("http://localhost:8000/users")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err.message);
  });

export const users: IUser[] = await allUsers;

export const userSlices = createSlice({
  name: "users",
  initialState: {
    value: {},
    logInUser: {},
    role: "",
  },
  reducers: {
    setCurrentUser: (state, action) => {
      const currentUser = action.payload;
      const userLogIn = users.find((u) => {
     return u.email === currentUser.email
      });
      state.value = userLogIn || {};
      state.logInUser = userLogIn || {};;
    },
  },
});

export const { setCurrentUser } = userSlices.actions;

export default userSlices.reducer;