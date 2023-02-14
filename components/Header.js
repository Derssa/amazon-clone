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
        className="sticky top-0 z-50 flex items-center bg-white px-4 flex-grow justify-between
      py-1 md:px-10"
      >
        <div className="flex items-center flex-grow md:flex-grow-0">
          <Link href="/">
            <a>
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={60}
                objectFit="contain"
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
        <div
          className="hidden md:flex items-center ml-6 h-10 w-[70%]
        rounded-lg flex-row bg-[#44de2c]"
        >
          <input
            className="p-2 bg-gray-100 h-full  flex-grow flex-shrink
            rounded-l-md focus:outline-none px-4"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="recherche"
            value={search}
          />
          <SearchIcon
            className="h-12 p-4 cursor-pointer"
            onClick={submitSearch}
          />
        </div>
        <div
          className="text-black flex items-center text-xs
        space-x-4 sm:space-x-6 sm:mx-6 mx-2 whitespace-nowrap"
        >
          <div
            onClick={!session ? signIn : signOut}
            className="link hidden md:block"
          >
            <p className="text-sm">{session ? `Déconnecter` : "Connexion"}</p>
            <p className="font-extrabold text-sm">
              {session ? `Bonjour، ${session.user.name}` : "mon compte"}
            </p>
          </div>
          {session && (
            <Link href="/orders">
              <a>
                <div className="link">
                  <p>Mes</p>
                  <p className="font-extrabold text-sm">commandes</p>
                </div>
              </a>
            </Link>
          )}
          <Link href="/checkout">
            <a>
              <div className="relative cursor-pointer flex items-center">
                <span
                  className="absolute top-0 right-0 h-4 w-4 bg-[#44de2c]
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
        <div
          onClick={!session ? signIn : signOut}
          className={`link p-2 md:hidden flex-grow ${
            session ? "bg-[#383838] text-white" : "bg-[#44de2c]"
          }`}
        >
          <p className="font-semibold text-center text-base">
            {session ? `Déconnecter, ${session.user.name}` : "Connexion"}
          </p>
        </div>
        <div className="p-2 md:hidden bg-gray-100">
          <div
            className="flex flex-row items-center h-10 
        rounded-lg flex-grow bg-[#44de2c]"
          >
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink
            rounded-l-md focus:outline-none px-4"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="recherche"
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
            className="absolute top-0 right-0 bg-gradient-to-l
       from-gray-300 h-full w-[45px]"
          />
          <div
            className="flex items-center space-x-5 p-2 pl-6 bg-gray-300 text-black text-xs
      font-medium sm:text-sm overflow-x-scroll scrollbar-hide pr-8"
          >
            <Link href="/">
              <p className="link flex items-center mr-6">
                <MenuIcon className="h-6 mr-2" />
                TOUT
              </p>
            </Link>
            <Link href="/categories/playstation">
              <p className="link whitespace-nowrap">PLAYSTATION</p>
            </Link>
            <Link href="/categories/psn">
              <p className="link whitespace-nowrap">PSN</p>
            </Link>
            <Link href="/categories/ps plus">
              <p className="link whitespace-nowrap">PS PLUS</p>
            </Link>
          </div>
        </nav>
      </header>
      <Link href={`https://wa.me/212621259039`}>
        <a className="fixed bottom-4 -right-4 z-50" target="_blank">
          <Image
            src="/support.png"
            width={200}
            height={55}
            objectFit="contain"
            alt="support"
          />
        </a>
      </Link>
    </>
  );
}

export default Header;
