import configureStore from "./configureStore";
import cartReducer from "../examples/redux/README.md";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    },  
});

export default  appStore;