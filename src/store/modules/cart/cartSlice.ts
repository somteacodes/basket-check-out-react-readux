import { createSlice } from "@reduxjs/toolkit";

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
    removeProduct: (state, action) => {
      const productIndex: any = state.findIndex(
        (product: ProductItemType) => product.sku === action.payload.sku
      );
      if (state[productIndex].amount! > 1) {
        state[productIndex].amount!--; // state[productIndex].amount +=1;
      } else {
        state.splice(productIndex, 1);
      }
    },
  },
});

export const { addProduct,removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
