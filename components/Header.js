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
        className="sticky top-0 z-50 flex items-center bg-white p-3 flex-grow justify-between
      py-2"
      >
        <div className="flex items-center flex-grow md:flex-grow-0">
          <Link href="/">
            <a>
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={50}
                objectFit="contain"
                className="cursor-pointer"
              />
            </a>
          </Link>
        </div>
        <div
          className="hidden md:flex items-center ml-6 h-10 w-[70%]
        rounded-lg flex-row-reverse bg-[#c1ab4d]"
        >
          <input
            dir="rtl"
            className="p-2 bg-gray-100 h-full  flex-grow flex-shrink
            rounded-r-md focus:outline-none px-4"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="بحث"
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
          <div onClick={!session ? signIn : signOut} className="link">
            <p dir="rtl" className="text-sm">
              {session ? `الخروج` : "تسجيل"}
            </p>
            <p dir="rtl" className="font-extrabold text-sm">
              {session ? `مرحبا ،${session.user.name}` : "الحساب"}
            </p>
          </div>
          {session && (
            <Link href="/orders">
              <a>
                <div className="link">
                  <p dir="rtl">كل</p>
                  <p dir="rtl" className="font-extrabold text-sm">
                    طلبياتك
                  </p>
                </div>
              </a>
            </Link>
          )}
          <Link href="/checkout">
            <a>
              <div className="relative cursor-pointer flex items-center">
                <span
                  className="absolute top-0 right-0 h-4 w-4 bg-[#c1ab4d]
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
        <div className="p-2 md:hidden bg-gray-100">
          <div
            className="flex flex-row-reverse items-center h-10 
        rounded-lg flex-grow bg-[#c1ab4d]"
          >
            <input
              dir="rtl"
              className="p-2 h-full w-6 flex-grow flex-shrink
            rounded-r-md focus:outline-none px-4"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="بحث"
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
            className="absolute top-0 left-0 bg-gradient-to-r
       from-gray-300 h-full w-[45px]"
          />
          <div
            dir="rtl"
            className="flex items-center space-x-5 p-2 pr-6 bg-gray-300 text-black text-xs
      font-medium sm:text-sm overflow-x-scroll scrollbar-hide pl-8"
          >
            <Link href="/">
              <p className="link flex items-center ml-6">
                <MenuIcon className="h-6 ml-2" />
                الكل
              </p>
            </Link>
            <Link href="/categories/علاج الشعر">
              <p className="link whitespace-nowrap">علاج الشعر</p>
            </Link>
            <Link href="/categories/شامبو للشعر">
              <p className="link whitespace-nowrap">شامبو للشعر</p>
            </Link>
            <Link href="/categories/مكيفات و بلسم">
              <p className="link whitespace-nowrap">مكيفات و بلسم</p>
            </Link>
            <Link href="/categories/أقنعة الشعر">
              <p className="link whitespace-nowrap">أقنعة الشعر</p>
            </Link>
            <Link href="/categories/زيوت للشعر">
              <p className="link whitespace-nowrap">زيوت للشعر</p>
            </Link>
            <Link href="/categories/سيروم للشعر">
              <p className="link whitespace-nowrap">سيروم للشعر</p>
            </Link>
            <Link href="/categories/تسريح شعر">
              <p className="link whitespace-nowrap">تسريح شعر</p>
            </Link>
            <Link href="/categories/تلوين الشعر و تنغيمه">
              <p className="link whitespace-nowrap">تلوين الشعر و تنغيمه</p>
            </Link>
            <Link href="/categories/كريمات الشعر">
              <p className="link whitespace-nowrap">كريمات الشعر</p>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
