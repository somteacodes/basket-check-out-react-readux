import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs/promises";
import api from "../../../service/Api";
import reducer from "../cart/cartSlice";
 

export interface ProductsSlice {
  products: ProductItemType[];
  loading: boolean;
  message:string; 
  failure?:boolean;
}

const initialState: ProductsSlice = {
  products: [],
  loading: false,
  message:""
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
  reducers: {
    
    addRandomProduct:((state)=>{
      console.log('reached addRandomProduct action');
      const productLength = state.products.length
      const randomProduct:ProductItemType= {
        "sku": productLength+1,
        "name": `Product ${productLength+1}`,
        "description": `"Product ${productLength+1} description"`,
        "price": Number.parseFloat((Math.random()*5).toFixed(2)),
       "basketLimit": Math.ceil(Math.random()*5)
      }

      state.products.push(randomProduct)
    })
  },
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
        state.message=action.payload.msg
       
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
export const {addRandomProduct} = productsSlice.actions
export default productsSlice.reducer;
