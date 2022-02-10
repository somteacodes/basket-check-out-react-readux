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
  "products/getUnreliableProducts",
  async () => {
    const { data } = await api.get("/unreliable_products");
    return data;
  }
);
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await api.get("/products");
    return data;
  }
);
export const checkOutProducts = createAsyncThunk(
  "products/checkOutProducts",
  async (body: any) => {
    const { data } = await api.post("/checkout", body);
    console.log(data);
    return data
  }
);
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
      })
      //   action creators for getUnreliableProducts
      .addCase(getUnreliableProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUnreliableProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getUnreliableProducts.rejected, (state, action) => {
        state.loading = false;
      })

      // action creato for checkOutProducts
      .addCase(checkOutProducts.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(checkOutProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkOutProducts.rejected, (state, action) => {
        state.loading = false;
      })
      
      ;
  },
});

export default productsSlice.reducer;
