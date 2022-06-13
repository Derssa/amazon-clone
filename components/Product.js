import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Currency = dynamic(() => import("react-currency-formatter"));
const StarIcon = dynamic(() =>
  import("@heroicons/react/solid").then((mod) => mod.StarIcon)
);
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectItems } from "../redux/slices/basketSlice";
import Link from "next/link";

function Product({ product }) {
  const dispatch = useDispatch();
  const [inBasket, setInBasket] = useState(false);
  const items = useSelector(selectItems);

  useEffect(() => {
    if (items.find((item) => item.productId === product._id)) {
      setInBasket(true);
    }
  }, [items]);

  const addItemToBasket = () => {
    const productItem = {
      productId: product._id,
      name: product.name,
      image: product.images[0],
      quantity: 1,
      color: product.colors === null ? "" : product.colors[0],
      size: "",
      reviews: product.reviews,
      details: product.datails,
      price: product.price,
    };
    localStorage.setItem("items", JSON.stringify([...items, productItem]));
    dispatch(addToBasket(productItem));
    setInBasket(true);
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 h-[90%] rounded-3xl justify-end">
      <Link href={`/product/${product.slug.current}`}>
        <a className="flex flex-col">
          <img
            className="rounded-t-3xl w-full h-[250px] object-cover"
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
          />
          <div className="px-5">
            <h4 className="my-3">{product.name}</h4>
            <div className="flex">
              {Array(product.reviews.average)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-2">{product.details}</p>
            <div className="mb-4 font-semibold">
              <Currency quantity={product.price} currency="MAD" />
            </div>
          </div>
        </a>
      </Link>
      <div className="mt-auto px-5 pb-5">
        <button
          disabled={inBasket}
          onClick={addItemToBasket}
          className={`mt-auto button ${
            inBasket &&
            "from-gray-300 to-gray-500 border border-gray-300 focus:ring-gray-500 active:from-gray-500"
          }`}
        >
          {inBasket ? "Déjà dans le panier" : "Ajouter au panier"}
        </button>
      </div>
    </div>
  );
}

export default Product;
