import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState: ProductItemType[] = [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIndex: any = state.findIndex(
        (product: ProductItemType) => product.sku === action.payload.sku
      );
      if (productIndex >= 0) {
        state[productIndex].amount!++;
        // state[productIndex].amount +=1;
      } else {
        state.push({ ...action.payload, amount: 1 });
      }
    },
    removeOneProduct: (state, action) => {
      const productIndex: any = state.findIndex(
        (product: ProductItemType) => product.sku === action.payload.sku
      );
      if (state[productIndex].amount! > 1) {
        state[productIndex].amount!--; // state[productIndex].amount +=1;
      } else {
        state.splice(productIndex, 1);
      }
    },
    updateAmount: (state, action) => {
      const productIndex = state.findIndex(
        (product) => product.sku === action.payload.sku
      );
      if (productIndex >= 0)
        state[productIndex].amount! = Number(action.payload.amount);
    },
    removeAllProduct: (state, action) => {
      const productIndex: any = state.findIndex(
        (product: ProductItemType) => product.sku === action.payload.sku
      );
      if (productIndex >= 0) state.splice(productIndex, 1);
    },
     
  },
});

export const totalAmount = (state: RootState) => {
  let amount = 0;
  state.cart.forEach(
    (cartItem: ProductItemType) => (amount += cartItem.amount! * cartItem.price)
  );
  return amount;
};

export const cartItemsCount = (state: RootState) => {
  let count = 0;
  state.cart.forEach(
    (cartItem: ProductItemType) => (count += cartItem.amount!)
  );
  return count;
};

export const { addProduct, removeOneProduct, updateAmount, removeAllProduct } = cartSlice.actions;

export default cartSlice.reducer;
