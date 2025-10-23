import React, { useEffect, useState } from "react";
import resList from "../utils/mockData";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

//dynamic routng///

//creation of custom hook
function RestrauntMenu() {
  //lets deep dive and create a custom hook to improve the readability of code
  const { id } = useParams();
  //=======================>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<=================

  const resInfo = useResMen(id); //so our custom hook is created here

  //==================>... our custom hook is calling for the data over the api and now our code looks
  //much cleaner and readable
  //=======================>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<=================

  return (
    <div>
      <h1 color="red">MENUUUUU</h1>
      <ul>
        {resInfo.menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestrauntMenu;
