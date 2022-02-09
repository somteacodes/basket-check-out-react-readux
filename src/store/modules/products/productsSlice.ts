import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../service/Api";

export interface ProductsSlice {
  products: ProductItemType[];
  loading: boolean;
}

const initialState: ProductsSlice = {
  products: [],
  loading: false,
};

export const getUnreliableProducts = createAsyncThunk(
  "products/fetchUnrealiableProducts",
  async () => {
    const { data } = await api.get("/unreliable_products");
    console.log(data);
    return data;
  }
);
export const getProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
      const { data } = await api.get("/products");
      console.log(data);
      return data;
    }
  );

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUnreliableProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUnreliableProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getUnreliableProducts.rejected, (state, action) => {
        state.loading = false;
        // state.products = action.payload;
      });
  },
});

export default productsSlice.reducer;
