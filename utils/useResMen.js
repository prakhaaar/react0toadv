import { useEffect, useState } from "react";

//====>>>>>>..lets create our own custom hook here=====<<<<<<<<<<<<<<<<<

//hoook is nothing but a normal js funct

//what is the contract of our hook???
//its taking an id and feteching the data//

const useResMen = (id) => {
  //so pass the id over here//

  //state for variable
  const [resInfo, setResInfo] = useState(null);
  //goal is to call the function;

  useEffect =
    (() => {
      fetchData();
    },
    []); //goodol useEffect

  fetchData = async () => {
    const data = await fetch("http:/exampleapi/id/232/232123if/random");
    const json = await data.json();
    setResInfo(json.data);
  };
};

///==============><================<< done
