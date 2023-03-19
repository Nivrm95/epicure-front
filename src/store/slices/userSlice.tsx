import { createSlice } from "@reduxjs/toolkit";

export interface IUserState {
  value: IUser[];
  logInUser: IUser;
}

export interface IUser {
  reducer: any;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  token?: string;
  role: string;
}

const allUsers = fetch("https://niv-epicure-back.onrender.com/users")
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
        return u.email === currentUser.email;
      });
      state.value = userLogIn || {};
      state.logInUser = userLogIn || {};
    },
  },
});

export const { setCurrentUser } = userSlices.actions;

export default userSlices.reducer;
