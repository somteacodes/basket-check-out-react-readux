import { ProductItem } from "./ProductItem";
export type ProductItemType={
    sku: number,
    name: string,
    description: string,
    price: number,
    basketLimit: number,
    image?:string
}
export const ProductList = () => {
  const products = [
    {
      sku: 1,
      name: "Product One",
      description: "Product One description",
      price: 1.11,
      basketLimit: 5,
    },
    {
      sku: 2,
      name: "Product Two",
      description: "Product Two description",
      price: 2.22,
      basketLimit: 4,
    },
    {
      sku: 3,
      name: "Product Three",
      description: "Product Three description",
      price: 3.33,
      basketLimit: 3,
    },
    {
      sku: 4,
      name: "Product Four",
      description: "Product Four description",
      price: 4.44,
      basketLimit: 2,
    },
    {
      sku: 5,
      name: "Product Five",
      description: "Product Five description",
      price: 5.55,
      basketLimit: 1,
    },
    {
        sku: 6,
        name: "Product Five",
        description: "Product Five description",
        price: 5.55,
        basketLimit: 1,
      },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 px-8">
     {products.length>0 &&
     products.map((product)=>(
         <ProductItem key={product.sku} item={product}/>
     ))
     }
    </div>
  );
};
