import Image from "next/image";
import dynamic from "next/dynamic";
const Currency = dynamic(() => import("react-currency-formatter"));
const StarIcon = dynamic(() =>
  import("@heroicons/react/solid").then((mod) => mod.StarIcon)
);
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, selectItems } from "../redux/slices/basketSlice";

function CheckoutProduct({ product }) {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const removeItemFromBasket = () => {
    const index = items.findIndex(
      (bascketItem) => bascketItem.productId === product.productId
    );

    let newBasket = [...items];

    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn("Not in bascket");
    }

    dispatch(removeFromBasket(newBasket));
    localStorage.setItem("items", JSON.stringify([...newBasket]));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={product.image}
        height={200}
        width={200}
        objectFit="contain"
        alt={product.name}
      />
      <div className="col-span-3 mx-5">
        <p>{product.name}</p>
        <div className="flex">
          {Array(product.reviews.average)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{product.details}</p>
        <Currency quantity={product.price * product.quantity} currency="MAD" />
      </div>
      <div className="flex flex-col space-y-2 my-auto items-center">
        <p className="text-center text-xs sm:text-base">
          Quantity: <span className="font-bold ml-1">{product.quantity}</span>
        </p>
        <button onClick={removeItemFromBasket} className="button">
          retirer du panier
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
