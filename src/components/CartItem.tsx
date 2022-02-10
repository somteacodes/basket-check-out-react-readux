import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import {
  removeAllProduct,
  updateAmount,
} from "../store/modules/cart/cartSlice";
import { AppDispatch } from "../store/store";

import { Button } from "./Button";

type CartItemProps = {
  item: ProductItemType;
};

export const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();

  const quantitySelectHandler = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch(updateAmount({ sku: item.sku, amount: e.target.value }));

  const productQuantities = [];
  for (let i = 1; i <= item.basketLimit; i++) {
    productQuantities.push(
      <option value={i} key={`${i}-${item.sku}`} selected={item.amount === i}>
        {i}
      </option>
    );
  }

  const removeAllProductClickHandler = (item: ProductItemType) =>
    dispatch(removeAllProduct(item));

  return (
    <div
      className="bg-white rounded-md  p-6 drop-shadow-md flex items-center lg:space-x-6 space-y-6 lg:space-y-0 flex-col lg:flex-row "
      key={item.sku}
    >
      <div className="flex lg:flex-1 w-full space-x-4">
        <img
          src={item.image || `https://picsum.photos/200`}
          alt={item.name}
          className="w-20 h-20 rounded-lg"
        />

        <div className="flex-1">
          <p className="text-lg font-bold">{item.name}</p>
          <p className="text-sm text-gray-700">Unit Price ${item.price}</p>
          <p className="text-lg font-bold">
            Total Price ${item.price * item.amount!}
          </p>
          <div className="flex space-x-4 mt-2">
            <p>Quantity</p>
            <select onChange={e => quantitySelectHandler(e)}>
              {productQuantities}
            </select>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-col items-center lg:space-y-4 space-x-4 lg:space-x-0">
        <Button
          data-testid={`remove-${item.sku}`}
          background="bg-red-800"
          color="text-white"
          onClick={() => removeAllProductClickHandler(item)}
        >
          Remove All
        </Button>
      </div>
    </div>
  );
};
