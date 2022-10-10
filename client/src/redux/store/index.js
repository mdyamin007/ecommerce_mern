import { configureStore } from "@reduxjs/toolkit";
import sellerReducer from "../features/seller/sellerSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    seller: sellerReducer,
    auth: authReducer,
  },
});
