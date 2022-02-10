import { FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { ProductList } from "../../components/ProductList/ProductList";
import { RootState } from "../../store/store";

export const Product: FC = () => {
  const { cart } = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  const toCheckOut = () => navigate("/cart");
  return (
    <>
      <div className="bg-gray-100 min-h-screen" data-testid="products">
        <div className="w-full">
          <ProductList />
        </div>
      </div>
      <div className="fixed bottom-0 w-full p-6 bg-white bg-opacity-80 flex justify-end">
         
          <Button
            background="bg-green-600"
            testid="proceedToCart"
            color="text-white"
            disabled={cart.length <= 0}
            onClick={() => toCheckOut()}
          >
            Proceed to cart
          </Button>
        
      </div>
    </>
  );
};
