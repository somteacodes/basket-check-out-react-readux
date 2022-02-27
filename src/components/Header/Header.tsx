import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { cartItemsCount, totalAmount } from "../../store/modules/cart/cartSlice";
import { addRandomProduct } from "../../store/modules/products/productsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faCartPlus, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
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
      <div className={location.pathname==="/"? `flex justify-between items-center h-full`:`flex justify-end items-center h-full`}>
      
     {location.pathname === "/" && <Button
      background="bg-cyan-600"
      color="text-white"
      disabled={products.length<=0}
      onClick={addProductClickHandler}
      >
        <FontAwesomeIcon icon={faSquarePlus} className="text-white pr-3" />
   
        Add Product
      </Button>}

      <ul className="font-bold flex justify-end space-x-6 items-center h-full self-end">
        <Link to="/cart">
          <li className="cursor-pointer rounded-full py px-4 bg-yellow-500 hover:bg-yellow-700">
          <FontAwesomeIcon icon={faCartPlus} className="text-black pr-3" />
            Basket Items: {cartCount}
          </li>
        </Link>

        {location.pathname === "/" && (
          <Link to="/cart">
            <li className="cursor-pointer rounded-full py px-4 bg-yellow-500 hover:bg-yellow-700">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-black pr-3" />
              Total Cost: $ {totalCost.toFixed(2)}
            </li>
          </Link>
        )}
      </ul>

      </div>
     
    </div>
  );
};
