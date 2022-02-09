import { FC } from "react";
import { ProductList } from "../components/ProductList";

export const Product: FC = () => {
  return (
    <div className="py-32 bg-gray-100">
      <div className="w-full">
        <ProductList />
      </div>
    </div>
  );
};
