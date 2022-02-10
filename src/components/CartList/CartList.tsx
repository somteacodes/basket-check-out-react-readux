import { FC } from "react";
import { useSelector } from "react-redux";
import { totalAmount } from "../../store/modules/cart/cartSlice";
import { RootState } from "../../store/store";
import { CartItem } from "../CartItem/CartItem";

export const CartList: FC = () => {
  const { cart } = useSelector((state: RootState) => state);
  const totalCost = useSelector(totalAmount)
  return (
    <>
    <div className="grid grid-cols-1 gap-6 px-8">
      {cart.length > 0 ? (
        cart.map(item => <CartItem item={item} key={item.sku} />)
      ) : (
        <>
          <p className="font-bold">No cart items</p>
        </>
      )}
    </div>

    <div className="flex justify-end px-8 mt-8">
        <p className="font-bold text-lg">Total: $ {totalCost.toFixed(2)} </p>
    </div>
    </>
  );
};
