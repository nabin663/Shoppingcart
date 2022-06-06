import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addCartitems(state, action) {
      const newItem = action.payload;

      const existingItem = state.itemList.find(
        (element) => element.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
        });
      }
      state.totalQuantity += 1;
    },
    shawCart(state) {
      state.showCart = true;
    },
  },
});
export const { addCartitems, showCart } = cartSlice.actions;
export default cartSlice;
