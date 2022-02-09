import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "../components/Button";
import { Header } from "../components/Header";

export const Home: FC = () => {
  return (
    <main>
      <div className="fixed w-full top-0 z-10">
        <Header />
      </div>
      <Outlet />
      <div className="fixed bottom-0 w-full p-6 bg-white bg-opacity-80 flex justify-end">
        <Button
          background="bg-green-600"
          color="text-white"
          onClick={() => console.log("You clicked on the pink circle!")}
        >
          Proceed to cart
        </Button>
      </div>
    </main>
  );
};
