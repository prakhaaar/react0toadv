# 🧠 Redux Toolkit — Store & Slice Explained

## 📦 What is the Redux Store?
The **store** is the **single source of truth** for your entire React application's state.  
It holds all your data in one place so that different components can share and update it easily.

Think of it as a **global database** inside your app.

```js
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

export default store
