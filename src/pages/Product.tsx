import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { ProductList } from "../components/ProductList";
import { RootState } from "../store/store";

export const Product: FC = () => {
  const { cart } = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  const toCheckOut = () => navigate("/cart");
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="w-full">
          <ProductList />
        </div>
      </div>
      <div className="fixed bottom-0 w-full p-6 bg-white bg-opacity-80 flex justify-end">
        {cart.length > 0 && (
          <Button
            background="bg-green-600"
            color="text-white"
            onClick={() => toCheckOut()}
          >
            Proceed to cart
          </Button>
        )}
      </div>
    </>
  );
};
