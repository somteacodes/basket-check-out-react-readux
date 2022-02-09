import {createSlice, } from '@reduxjs/toolkit'
 

export interface ProductsSlice{
products:ProductItemType[],
loading:boolean,
}

const initialState:ProductsSlice={
products:[],
loading:false,
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{

    }
})


export default productsSlice.reducer