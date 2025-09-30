import React, { useEffect, useState } from "react";
import resList from "../utils/mockData";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

//dynamic routng///

function RestrauntMenu() {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, [id]); //dependency array for letting it mount only once//;

  //fetching the data using an async function
  const fetchData = async () => {
    const data = await fetch("https//randomdata");
    const json = await data.json();
    setResInfo(json.data); //setting it to the satate now we have our data;;
  };
  if (!resInfo) return Shimmer();

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
