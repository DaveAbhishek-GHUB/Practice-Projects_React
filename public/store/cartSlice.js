import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  GoogleRegisterData: null,
};
const fashinoCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.items.push(action.payload);
      state.totalAmount =
        Number(state.totalAmount) + Number(action.payload.price);
    },
    remove(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const removedItem = state.items[index];
        state.totalAmount = Number(state.totalAmount) - removedItem.price;
        state.items.splice(index, 1);
      }
    },
    setGoogleLogin(state, action) {
      state.GoogleRegisterData = action.payload;
    },
    resetGoogleData(state) {
      state.GoogleRegisterData = null;
    },
  },
});

export const { add, remove, setGoogleLogin, resetGoogleData } =
  fashinoCart.actions;
export default fashinoCart.reducer;
