import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { cartItemsCount, totalAmount } from "../store/modules/cart/cartSlice";

export const Header = () => {
  const cartCount = useSelector(cartItemsCount);
  const totalCost = useSelector(totalAmount);

  const location = useLocation();

  return (
    <div className="h-20 bg-yellow-200 w-full px-8 f">
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
  );
};
