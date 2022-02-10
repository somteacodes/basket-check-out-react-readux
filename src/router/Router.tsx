import { Route, Routes } from "react-router-dom";
import { CheckOut } from "../pages/CheckOut/CheckOut";
import { Home } from "../pages/Home/Home";
import { Product } from "../pages/Products/Products";
export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Product />} />
          <Route path="/cart" element={<CheckOut />} />
        </Route>
      </Routes>
    </>
  );
};
