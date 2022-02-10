import { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { CartList } from "../components/CartList";
import Loading from "../components/Loading/Loading";
import { cartItemsCount } from "../store/modules/cart/cartSlice";
import { checkOutProducts } from "../store/modules/products/productsSlice";
import { AppDispatch, RootState } from "../store/store";
import {luhnCheck} from '../utils/luhn_check'
type CheckOutProps = {};
export const CheckOut: FC<CheckOutProps> = () => {
  const [cardNumber, setCardNumber] = useState("");

  const cartCount = useSelector(cartItemsCount);
  const { cart } = useSelector((state: RootState) => state);
  const canCheckOut = cartCount > 0 && cardNumber.length>=16;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    products: { loading },
  } = useSelector((state: RootState) => state);

  
  const checkOutClickHandler = () => {
    let checkOutRequest = {
      basket: cart.map(({ sku, amount }) => ({ sku, quantity: amount })),
      cardNumber,
    };
    console.log("checkout products", checkOutRequest, "cardcheck", luhnCheck(cardNumber));
    if(luhnCheck(cardNumber)) {dispatch(checkOutProducts(checkOutRequest));}
    else{
        // invalid card defailts
    }
  };

  const cardNumberTextFieldHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    setCardNumber(value);
  };

  const toProductList = () => {
    navigate("/");
  };



  return (
    <div className="bg-gray-100 min-h-screen">
        <Loading show={loading}/>
      <div className="flex lg:space-x-4 lg:flex-row flex-col space-y-4 lg:space-y-0 px-6">
        <div className="lg:w-3/4 w-full ">
          <CartList />
        </div>
        <div className="lg:w-1/4 w-full">
          <div className="bg-white shadow rounded-md p-8 ">
            <p className="font-bold pb-8 mt-20">Make Payment</p>
            <fieldset className="w-full px-4">
              <label htmlFor="card-number" className="text-sm">
                Input Card Details
              </label>
              <input
                type="text"
                className="my-2 p-2 border rounded-lg w-full"
                placeholder="XXXXXXXXXXXX"
                value={cardNumber}
                onChange={(e) => cardNumberTextFieldHandler(e)}
              />
            </fieldset>

            <div className="flex justify-between w-full mt-6 space-x-4">
              <Button
                background="bg-blue-600"
                color="text-white"
                onClick={() => toProductList()}
              >
                Continue Shopping
              </Button>
              <Button
                background="bg-green-600"
                color="text-white"
                disabled={!canCheckOut}
                onClick={() => checkOutClickHandler()}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
