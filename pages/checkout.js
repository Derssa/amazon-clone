import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
const CheckoutProduct = dynamic(() => import("../components/CheckoutProduct"));
const Currency = dynamic(() => import("react-currency-formatter"));
import {
  addAllToBasket,
  selectItems,
  selectTotal,
} from "../redux/slices/basketSlice";
const CheckCircleIcon = dynamic(() =>
  import("@heroicons/react/solid").then((mod) => mod.CheckCircleIcon)
);
const XCircleIcon = dynamic(() =>
  import("@heroicons/react/solid").then((mod) => mod.XCircleIcon)
);
import Link from "next/link";
import axios from "axios";
import Head from "next/head";

function Checkout() {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [client, setClient] = useState({
    email: session ? session.user.email : "",
    name: session ? session.user.name : "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [err, setErr] = useState("");

  const inputChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
    setErr("");
  };

  const submitCheckout = async (e) => {
    e.preventDefault();
    if (
      client.name.length <= 0 ||
      client.email.length <= 0 ||
      client.phone.length <= 0 ||
      client.address.length <= 0
    )
      return setErr("Please fill in all fields.");

    setLoading(true);

    const order = {
      _type: "orders",
      clientName: client.name,
      clientEmail: client.email,
      clientPhone: client.phone,
      clientAddress: client.address,
      amount: total,
      items: items.map((item, i) => ({
        _key: i.toString(),
        productId: item.productId,
        name: item.name,
        image: item.image,
        quantity: item.quantity,
        color: item.color.name,
        size: item.size,
      })),
    };

    try {
      await axios.post(`/api/checkout`, {
        order,
      });
      setIsConfirmed(true);
      dispatch(addAllToBasket([]));
      localStorage.removeItem("items");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErr(err.response.data.msg);
    }
  };

  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      {isConfirmed ? (
        <main className="max-w-screen-lg my-10 mx-auto">
          <div className="flex flex-col p-10 bg-white">
            <div className="flex items-center space-x-2 mb-5">
              <XCircleIcon className="text-red-500 h-10" />
              <h1 className="text-3xl">Désolé, en rupture de stock !</h1>
            </div>
            <p>
              Merci d'avoir magasiné avec nous. si vous souhaitez visiter
              d'autres produits s'il vous plaît le lien ci-dessous.
            </p>
            <Link href="/">
              <a className="button mt-8 text-center">
                Aller à la page d'accueil
              </a>
            </Link>
          </div>
        </main>
      ) : (
        <main className="lg:flex lg:flex-row-reverse max-w-screen-2xl mx-auto py-5">
          {items.length > 0 && (
            <form className="sticky top-16 sm:top-24 z-40 flex flex-col h-fit bg-white mx-5 mb-5 md:mx-10 lg:mt-8 shadow-xl">
              <p className="text-sm mb-2 text-center bg-gray-800 text-white py-1">
                livraison gratuite
              </p>
              <h2 className="whitespace-nowrap text-center px-5">
                Total ({items.length} éléments):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="MAD" />
                </span>
              </h2>

              <input
                className="input mt-2"
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                onChange={inputChange}
                defaultValue={client.email}
              />
              <input
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                onChange={inputChange}
                defaultValue={client.name}
              />
              <input
                className="input"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Your phone"
                onChange={inputChange}
                defaultValue={client.phone}
              />
              <input
                className="input"
                type="text"
                name="address"
                id="address"
                placeholder="Your address"
                onChange={inputChange}
                defaultValue={client.address}
              />
              <p className="text-xs text-center text-red-700 my-2 font-bold">
                {err}
              </p>
              {loading ? (
                <button
                  disabled
                  type="button"
                  className="text-white bg-blue-700 font-medium text-center px-6 py-2 text-sm mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                >
                  <svg
                    role="status"
                    className="inline w-4 h-4 mr-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Chargement...
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={submitCheckout}
                  className="button mt-2"
                >
                  Acheter
                </button>
              )}
            </form>
          )}
          <div className="flex flex-col justify-center mx-5 md:mx-4 my-5">
            <Image
              src="/pub2.jpg"
              width={1100}
              height={300}
              objectFit="contain"
            />
            <div className="flex flex-col p-5 mt-8 space-y-10 bg-white">
              <h1 className="text-xl md:text-3xl border-b pb-4">
                {items.length === 0 ? "Votre panier est vide" : "Votre panier"}
              </h1>
              {items.map((item) => (
                <CheckoutProduct key={item.productId} product={item} />
              ))}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Checkout;

{
  /*<main className="max-w-screen-lg my-10 mx-auto">
          <div className="flex flex-col p-10 bg-white">
            <div className="flex items-center space-x-2 mb-5">
              <CheckCircleIcon className="text-green-500 h-10" />
              <h1 className="text-3xl">
                Merci, votre commande a été confirmée !
              </h1>
            </div>
            <p>
              Merci d'avoir magasiné avec nous. si vous souhaitez vérifier la
              état des commandes s'il vous plaît le lien ci-dessous.
            </p>
            <Link href="/orders">
              <a className="button mt-8 text-center">Accéder à mes commandes</a>
            </Link>
          </div>
      </main>*/
}
