import { ChangeEvent, FC, useState } from "react";
import { CartList } from "../components/CartList";
type CheckOutProps = {};
export const CheckOut: FC<CheckOutProps> = () => {
  const [cardNumber, setCardNumber] = useState("");

  const cardNumberTextFieldHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    console.log(value);
    setCardNumber(value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
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
          </div>
        </div>
      </div>
    </div>
  );
};
