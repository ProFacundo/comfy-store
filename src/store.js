import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./feasures/cart/cartSlice";
import userReducer from "./feasures/user/userSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
