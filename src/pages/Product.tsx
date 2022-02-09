import { FC } from "react";
import { ProductList } from "../components/ProductList";

export const Product: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-full">
        <ProductList />
      </div>
    </div>
  );
};
