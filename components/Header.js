import Image from "next/image";
import dynamic from "next/dynamic";
const MenuIcon = dynamic(() =>
  import("@heroicons/react/outline").then((mod) => mod.MenuIcon)
);
const SearchIcon = dynamic(() =>
  import("@heroicons/react/outline").then((mod) => mod.SearchIcon)
);
const ShoppingCartIcon = dynamic(() =>
  import("@heroicons/react/outline").then((mod) => mod.ShoppingCartIcon)
);
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllToBasket, selectItems } from "../redux/slices/basketSlice";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const itemsStore = JSON.parse(localStorage.getItem("items"));
    if (itemsStore) {
      dispatch(addAllToBasket(itemsStore));
    }
  }, []);

  const submitSearch = () => {
    if (search === "") {
      return;
    }

    router.push(`/search/${search}`);
  };

  return (
    <>
      <div
        className="sticky top-0 z-50 flex items-center bg-store_blue p-1 flex-grow
      py-1"
      >
        <div className="mt-2 flex items-center flex-grow md:flex-grow-0">
          <Link href="/">
            <a>
              <Image
                src="/logo.png"
                alt="logo"
                width={170}
                height={35}
                objectFit="contain"
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
        <div
          className="hidden md:flex items-center h-10 
        rounded-md flex-grow bg-yellow-400"
        >
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink
            rounded-l-md focus:outline-none px-4"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <SearchIcon
            className="h-12 p-4 cursor-pointer"
            onClick={submitSearch}
          />
        </div>
        <div
          className="text-white flex items-center text-xs
        space-x-4 sm:space-x-6 sm:mx-6 mx-2 whitespace-nowrap"
        >
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Deconnecter` : "Connecter"}</p>
            <p className="font-extrabold md:text-sm">
              {session ? `Salut, ${session.user.name}` : "Mon compte"}
            </p>
          </div>
          {session && (
            <Link href="/orders">
              <a>
                <div className="link">
                  <p>votre</p>
                  <p className="font-extrabold md:text-sm">Commande</p>
                </div>
              </a>
            </Link>
          )}
          <Link href="/checkout">
            <a>
              <div className="relative link flex items-center">
                <span
                  className="absolute top-0 right-0 h-4 w-4 bg-yellow-400
            text-center rounded-full text-black font-bold"
                >
                  {items.length}
                </span>
                <ShoppingCartIcon className="h-9" />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <header>
        <div className="p-2 md:hidden bg-gray-600">
          <div
            className="flex items-center h-10 
        rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500"
          >
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink
            rounded-l-md focus:outline-none px-4"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <SearchIcon
              className="h-12 p-4 cursor-pointer"
              onClick={submitSearch}
            />
          </div>
        </div>
        <nav className="relative">
          <div
            className="flex items-center space-x-6 p-2 pl-6 bg-store_blue-light text-white text-xs
      sm:text-sm overflow-x-scroll scrollbar-hide pr-16"
          >
            <p className="link flex items-center">
              <MenuIcon className="h-6 mr-2" />
              Tout
            </p>
            <p className="link">Sac</p>
          </div>
          <div
            className="absolute top-0 right-0 bg-gradient-to-l
       from-store_blue-light h-full w-2/12"
          />
        </nav>
      </header>
    </>
  );
}

export default Header;
