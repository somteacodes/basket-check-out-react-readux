import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ProductItem } from "../../components/ProductItem/ProductItem";
  
import { store } from "../../store/store";
import { Product } from "./Products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
describe("<Products/>", ()=>{

    it('renders without crashing',()=>{
        render(
            <Provider store={store}>
              <BrowserRouter>
                <Product />
              </BrowserRouter>
            </Provider>
          );
          expect(screen.getByTestId('products')).toBeInTheDocument()
    })
    it("Proceed to cart to be disabled when cart item is empty", async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
            <Product />
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
     
        expect(screen.getByTestId("proceedToCart")).toBeDisabled();
      });
    it("Proceed to cart button to be enabled when cart item is not empty", async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <Product />
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
     
        expect(screen.getByTestId("proceedToCart")).not.toBeDisabled();
      });
})