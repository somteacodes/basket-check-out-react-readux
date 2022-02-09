
import { combineReducers } from "@reduxjs/toolkit";
import products from './products/productsSlice';
import cart from './cart/cartSlice'
export default combineReducers({
    cart,
    products
})