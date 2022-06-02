import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../redux/slices/basketSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div
        className="flex items-center bg-store_blue p-1 flex-grow
      py-1"
      >
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            alt="logo"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div
          className="hidden sm:flex items-center h-10 
        rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500"
        >
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink
            rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4 cursor-pointer" />
        </div>
        <div
          className="text-white flex items-center text-xs
        space-x-4 sm:space-x-6 sm:mx-6 mx-2 whitespace-nowrap"
        >
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span
              className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400
            text-center rounded-full text-black font-bold"
            >
              {items.length}
            </span>
            <ShoppingCartIcon className="h-9" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="p-2 sm:hidden bg-gray-600">
        <div
          className="flex items-center h-10 
        rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500"
        >
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink
            rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4 cursor-pointer" />
        </div>
      </div>
      <nav className="relative">
        <div
          className="flex items-center space-x-6 p-2 pl-6 bg-store_blue-light text-white text-xs
      sm:text-sm overflow-x-scroll scrollbar-hide pr-16"
        >
          <p className="link flex items-center">
            <MenuIcon className="h-6 mr-2" />
            All
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today's Deals</p>
          <p className="link ">Today's Deals</p>
          <p className="link">Food & Grocery</p>
          <p className="link">Prime</p>
          <p className="link">Buy Again</p>
          <p className="link">Shopper Toolkit</p>
          <p className="link">Health & Personal Care</p>
        </div>
        <div
          className="absolute top-0 right-0 bg-gradient-to-l
       from-store_blue-light h-full w-2/12"
        />
      </nav>
    </header>
  );
}

export default Header;
