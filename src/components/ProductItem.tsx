import { FC } from "react";
import { Button } from "./Button";
 

type ProductItemProps={
    item:ProductItemType
}
export const ProductItem:FC<ProductItemProps> = ({item}) => {
  return (
    <div className="bg-white rounded-md  p-6 drop-shadow-md flex items-center lg:space-x-6 space-y-6 lg:space-y-0 flex-col lg:flex-row " key={item.sku}>
        
     <div className="flex lg:flex-1 w-full space-x-4">
     <img src={item.image|| `https://picsum.photos/200`} alt={item.name} className="w-20 h-20 rounded-lg" />
      <div className="flex-1">
          <p className="text-lg font-bold">
              {item.name}
          </p>
          <p className="text-xl font-bold">$ {item.price}</p>
          <p>{item.description}</p>
      </div>
     </div>

      {/* left side */}
      <div className="flex lg:flex-col items-center lg:space-y-4 space-x-4 lg:space-x-0">
        <Button
          background="bg-yellow-300" 
          color="text-black"
          onClick={() => console.log(`Add one item to ${item.sku}`)}
        >
          Add to basket
        </Button>
        <Button
          background="bg-red-800"
          color="text-white"
          onClick={() => console.log(`remove one item from ${item.sku}`)}
        >
          Remove
        </Button>
        
      </div>
    </div>
  );
};
