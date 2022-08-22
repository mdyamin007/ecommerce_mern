import { configureStore } from "@reduxjs/toolkit";
import sellerReducer from "../features/seller/sellerSlice";

export const store = configureStore({
  reducer: {
    seller: sellerReducer,
  },
});
