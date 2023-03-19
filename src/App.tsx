import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componnents/home_page/full_page/HomePage";
import ChefPage from "./componnents/chef_page/full_page/ChefPage";
import RestaurantsPage from "./componnents/restaurants_page/full_page/Restaurants";
import SingelRestPage from "./componnents/restaurants_page/singel_restaurants_page/SingelRestPage";
import SignIn from "./componnents/general/sign_in/SignIn";
import SignUp from "./componnents/general/sign_up/SignUp";
import HistoryPage from "./componnents/general/shop_cart/history_page/HistoryPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ChefPage" element={<ChefPage />} />
          <Route path="/RestaurantsPage" element={<RestaurantsPage />} />
          <Route path= "/:RestId" element={<SingelRestPage />} />
          <Route path="/SingIn" element={<SignIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/HistoryPage" element={<HistoryPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
