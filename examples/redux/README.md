SLICE CREATION //



```js
import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    //dont with state lets write reducerss//

    reducers:{
        addItem:(state,action)=>{
            //maping over the state 
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
              state.items.pop();
              //no modification is needed;
        },
        emptyCart:(state)=>{
            state.items.length=0;
        },
    },
});

//export our reducerrs
//we get cartSlice()==>as a big object {
//     name:
     // state:
     //reducers:
            //addI
            //rem
            //empty
//    }


export const {addItem,removeItem,emptyCart}=cartSlice.actions;

export default cartSlice.reducer(); 

```