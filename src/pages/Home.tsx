import { FC } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { RootState } from "../store/store";

export const Home: FC = () => {
    const {cart} = useSelector( (state:RootState)=>state)
    const navigate = useNavigate()
    const toCheckOut =  ()=>navigate('/cart')
  return (
    <main>
      <div className="fixed w-full top-0 z-10">
        <Header />
      </div>
      <Outlet />
      <div className="fixed bottom-0 w-full p-6 bg-white bg-opacity-80 flex justify-end">
       {cart.length>0 && <Button
          background="bg-green-600"
          color="text-white"
          onClick={() => toCheckOut()}
        >
          Proceed to cart
        </Button>}
      </div>
    </main>
  );
};
