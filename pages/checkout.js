import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import Currency from "react-currency-formatter";
import { selectItems, selectTotal } from "../redux/slices/basketSlice";

function checkout() {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <Header />

      <main className="lg:flex lg:flex-row-reverse max-w-screen-2xl mx-auto py-5">
        {items.length > 0 && (
          <div className="sticky top-10 z-40 flex flex-col h-fit bg-white p-5 mx-5 mb-5 md:mx-10 lg:mt-8 shadow-xl">
            <h2 className="whitespace-nowrap text-center">
              Subtotal ({items.length} items):{" "}
              <span className="font-bold">
                <Currency quantity={total} currency="MAD" />
              </span>
            </h2>
            <button
              onClick={!session ? signIn : signOut}
              className={`button mt-2 ${
                !session &&
                "from-gray-400 to-gray-500 border-gray-200 text-gray-300 active:from-gray-600"
              }`}
            >
              {!session ? "Sign in to checkout" : "Proceed to checkout"}
            </button>
          </div>
        )}
        <div className="flex flex-col justify-center mx-5 md:mx-10 my-5">
          <Image
            src="https://links.papareact.com/ikj"
            width={1100}
            height={300}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 mt-8 space-y-10 bg-white">
            <h1 className="text-xl md:text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Basket is empty"
                : "Your Shopping Basket"}
            </h1>
            {items.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default checkout;
