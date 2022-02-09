import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUnreliableProducts } from "../store/modules/products/productsSlice";
import { AppDispatch, RootState } from "../store/store";
import { Button } from "./Button";
import Loading from "./Loading/Loading";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const {
    products: { products },
  } = useSelector((state: RootState) => state);
  const {
    products: { loading },
  } = useSelector((state: RootState) => state);

useEffect(()=>{
    dispatch(getUnreliableProducts());
},[])

  const dispatch = useDispatch<AppDispatch>();
  return (
    <main>
      {loading ? (
        <>
          <Loading show={loading} />
        </>
      ) : (
        <div className="grid grid-cols-1 gap-6 px-8 py-32">
          {products?.length > 0 ? (
            products.map((product) => (
              <ProductItem key={product.sku} item={product} />
            ))
          ) : (
            <div className="grid place-content-center  text-center gap-6">
              <p className="italic">
                Looks like something went wrong. Let's try again.
              </p>
              <Button
                background="bg-yellow-300"
                color="text-black"
                onClick={() => dispatch(getUnreliableProducts())}
              >
                Retry
              </Button>
            </div>
          )}
        </div>
      )}
    </main>
  );
};
