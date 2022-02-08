import React from "react";

import "./App.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

function App() {
  return (
    <>
      <div className="fixed w-full top-0 z-10">
        <Header />
      </div>
      <div className="py-32 bg-gray-100">
        <div className="w-full">
          <ProductList />
        </div>
      </div>
      <div className="fixed bottom-0 w-full p-6 bg-white bg-opacity-80 flex justify-end">
      <Button
          background="bg-green-600"
          color="text-white"
          onClick={() => console.log("You clicked on the pink circle!")}
        >
          Proceed to cart
        </Button>
      </div>
    </>
  );
}

export default App;
