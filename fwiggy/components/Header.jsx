import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Redux cart items
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="flex flex-wrap mx-auto items-center justify-between p-6 lg:px-8 text-slate-300 bg-sky-800">
      <div>
        <img className="w-[100px]" src={LOGO_URL} alt="Logo" />
      </div>
      <div>
        <ul className="flex flex-wrap m-1 p-1 items-center">
          <li className="p-2">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="p-2">
            Cart ({cartItems.length})
          </li>
          <li className="p-2">
            <button
              className="login-btn"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
          <li className="p-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
