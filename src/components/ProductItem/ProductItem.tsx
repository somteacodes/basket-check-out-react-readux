import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeOneProduct } from "../../store/modules/cart/cartSlice";
import { AppDispatch, RootState } from "../../store/store";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash ,
  faCartPlus
} from "@fortawesome/free-solid-svg-icons"
type ProductItemProps = {
  item: ProductItemType;
};
export const ProductItem: FC<ProductItemProps> = ({ item }) => {
  const dispatch = useDispatch<AppDispatch>();

  const itemAmount = useSelector((state: RootState) =>
    state.cart.reduce((sumAmount: any, item: ProductItemType) => {
      sumAmount[item.sku] = item.amount;
      return sumAmount;
    }, {})
  );

  const addToCartHandler = (item: ProductItemType) =>
    dispatch(addProduct(item));

  const removeFromCartHandler = (item: ProductItemType) =>
    dispatch(removeOneProduct(item));

  return (
    <div
      className="bg-white rounded-md  p-6 drop-shadow-md flex items-center lg:space-x-6 space-y-6 lg:space-y-0 flex-col lg:flex-row "
      key={item.sku}
    >
      <div className="flex lg:flex-1 w-full space-x-4">
        <img
          src={item.image || `https://picsum.photos/${Math.round(Math.random()*100)}`}
          alt={item.name}
          className="w-20 h-20 rounded-lg"
        />

        <div className="flex-1">
          <p className="text-lg font-bold">{item.name}</p>
          <p className="text-xl font-bold">$ {item.price}</p>
          <p>{item.description}</p>
        </div>
      </div>

      {itemAmount[item.sku] && (
        <div className="p-3 rounded-full bg-yellow-400 h-10 w-10 grid place-content-center">
          {itemAmount[item.sku]}
        </div>
      )}
      <div className="flex lg:flex-col items-end lg:space-y-4 space-x-4 lg:space-x-0">
        <Button
          testid={`add-${item.sku}`}
          background="bg-yellow-300"
          color="text-black"
          disabled={itemAmount[item.sku] >= item.basketLimit && true}
          onClick={() => addToCartHandler(item)}
        >
            <FontAwesomeIcon icon={faCartPlus} className="text-black pr-3" />
          Add to basket
        </Button>
        <Button
          testid={`remove-${item.sku}`}
          background="bg-red-800"
          color="text-white"
          disabled={!itemAmount[item.sku] && true}
          onClick={() => removeFromCartHandler(item)}
        >
          <FontAwesomeIcon icon={faTrash} className="text-white pr-3" />
          Remove
        </Button>
      </div>
    </div>
  );
};
