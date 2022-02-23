import { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { CartList } from "../../components/CartList/CartList";
import Loading from "../../components/Loading/Loading";
import { Notification } from "../../components/Notification/Notification";
import { cartItemsCount } from "../../store/modules/cart/cartSlice";
import { checkOutProducts } from "../../store/modules/products/productsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { luhnCheck } from "../../utils/luhn_check";

export const CheckOut: FC = () => {
  const [cardNumber, setCardNumber] = useState("");

  const cartCount = useSelector(cartItemsCount);
  const { cart } = useSelector((state: RootState) => state);
  const canCheckOut = cartCount > 0;
  const [cardNumberError, setCardNumberError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const {
    products: { loading , message},
  } = useSelector((state: RootState) => state);

  const checkOutClickHandler = () => {
    let checkOutRequest = {
      basket: cart.map(({ sku, amount }) => ({ sku, quantity: amount })),
      cardNumber,
    };

    if (luhnCheck(cardNumber)) {
      dispatch(checkOutProducts(checkOutRequest));
      setCardNumberError(false);
    } else {
      setCardNumberError(true);
    }
  };

  const cardNumberTextFieldHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

      const isNumber = value.match(/[0-9\b]+$/g)
      if(isNumber) setCardNumber(value);
      
   
   
  };

  const toProductList = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <Loading show={loading} />
     <Notification message={message}/>
      <div className="flex lg:space-x-4 lg:flex-row flex-col space-y-4 lg:space-y-0 p-6">
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
                data-testid="cardNumber-input"
                className="my-2 p-2 border rounded-lg w-full"
                placeholder="XXXXXXXXXXXX"
                value={cardNumber}
                onChange={(e) => cardNumberTextFieldHandler(e)}
              />
            </fieldset>
            {cardNumberError && (
              <p className="text-red-800 text-sm py-2">
                Please enter a valid credit card number
              </p>
            )}

            <div className="flex flex-col items-end w-full mt-6 space-y-4">
              <Button
                background="bg-green-600"
                color="text-white"
                testid="checkout"
                disabled={!canCheckOut}
                onClick={() => checkOutClickHandler()}
              >
                Checkout
              </Button>
              <Button
                background="bg-blue-600"
                color="text-white"
                testid="continue-shopping"
                onClick={() => toProductList()}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
