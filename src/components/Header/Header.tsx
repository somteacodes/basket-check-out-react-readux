import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { cartItemsCount, totalAmount } from "../../store/modules/cart/cartSlice";
import { addRandomProduct } from "../../store/modules/products/productsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { Button } from "../Button/Button";

export const Header = () => {
  const cartCount = useSelector(cartItemsCount);
  const totalCost = useSelector(totalAmount);
  const {
    products: { products },
  } = useSelector((state: RootState) => state);

  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const addProductClickHandler = ()=>{
    dispatch(addRandomProduct())
  }

  return (
    <div className="h-20 bg-yellow-200 w-full px-8 ">
      <div className="flex justify-between items-center h-full">
      <Button
      background="bg-cyan-600"
      color="text-white"
      disabled={products.length<=0}
      onClick={addProductClickHandler}
      >
        Add Product
      </Button>

      <ul className="font-bold flex justify-end space-x-6 items-center h-full">
        <Link to="/cart">
          <li className="cursor-pointer rounded-full py px-4 bg-yellow-500 hover:bg-yellow-700">
            Basket Items: {cartCount}
          </li>
        </Link>

        {location.pathname === "/" && (
          <Link to="/cart">
            <li className="cursor-pointer rounded-full py px-4 bg-yellow-500 hover:bg-yellow-700">
              Total Cost: $ {totalCost.toFixed(2)}
            </li>
          </Link>
        )}
      </ul>

      </div>
     
    </div>
  );
};
