//so basically this is going to be our hoc //
//hoc is a function that takes a component as an argument and returns a new component  //
//it can return a function or accept a function as an argument  //
//function1=(functio2)=>{} //

import React, { useState } from "react";

//my HOC which will handle data fetching using api and pass data as props

const MainDataFetch = (WrappedComponent, apiUrl) => {// here it is accepting a function as an argument
           return function EnhancedComponent(props) {  
            const[data,setData]=useState(null);
            const[loading,setLoading]=useState(true);
}