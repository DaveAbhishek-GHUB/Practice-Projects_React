import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import cart from "./cartSlice";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cart);

const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
