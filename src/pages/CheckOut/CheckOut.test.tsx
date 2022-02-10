 
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider, } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ProductItem } from "../../components/ProductItem/ProductItem";
 
import { store } from "../../store/store";
import { CheckOut } from "./CheckOut";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("<CheckOut/>", () => {
  it("Renders without crashing", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CheckOut />
        </BrowserRouter>
      </Provider>
    );
    await sleep(2000);
    expect(screen.getByText("No cart items")).toBeInTheDocument();
  });

  it("Checkout button to be disabled when cart item is empty", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CheckOut />
        </BrowserRouter>
      </Provider>
    );

    await sleep(3000);
 
    expect(screen.getByTestId("checkout")).toBeDisabled();
  });

  it("Checkout button to be enabled when cart item is not empty", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CheckOut />
          <ProductItem item={{
                    sku: 1,
                    name: "Product One",
                    description: "Product One description",
                    price: 1.11,
                    basketLimit: 5,
                    image: undefined,
                    amount: undefined
                }}/>
        </BrowserRouter>
      </Provider>
    );

    await sleep(3000);
    fireEvent.click(screen.getByTestId('add-1'));
 
    expect(screen.getByTestId("checkout")).not.toBeDisabled();
  });
});
