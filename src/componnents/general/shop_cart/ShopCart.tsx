import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ShopCart.css";

const ShopCart: React.FC = () => {
  const navigat = useNavigate();
  return (
    <div className="modal-shopcart">
      <div className="empty-cart">
        <img src="./Images/general/ShoppingIconEmpty.svg" alt="empty cart" />
        <button className="history-btu" onClick={() => navigat("/HistoryPage")}>
          Order history
        </button>
      </div>
    </div>
  );
};

export default ShopCart;
