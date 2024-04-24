import { configureStore } from "@reduxjs/toolkit"
import CardsSlice from "./slices/CardsSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";



const Store = configureStore({
    reducer: {
        cart: CardsSlice,
        category : CategorySlice,
        search : SearchSlice,

    },
})


export default Store;