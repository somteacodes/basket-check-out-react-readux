import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../store/store";

export const Header = () => {
  const cartItemsCount = useSelector((state: RootState) => {
    let count = 0;
    state.cart.forEach(
      (cartItem: ProductItemType) => (count += cartItem.amount!)
    );
    return count;
  });
  const totalAmount = useSelector((state: RootState) => {
    let amount = 0;
    state.cart.forEach(
      (cartItem: ProductItemType) =>
        (amount += cartItem.amount! * cartItem.price)
    );
    return amount;
  });

  const location = useLocation()
  console.log(location);

  return (
    <div className="h-20 bg-yellow-200 w-full px-8 f">
      <ul className="font-bold flex justify-end space-x-6 items-center h-full">
        <li className="cursor-pointer rounded-full py px-4 bg-yellow-500 hover:bg-yellow-700">
          Basket Items: {cartItemsCount}
        </li>
        {location.pathname === '/' && <li className="cursor-pointer rounded-full py px-4 bg-yellow-500 hover:bg-yellow-700">
          Total Cost: $ {totalAmount.toFixed(2)}
        </li>}
      </ul>
    </div>
  );
};
