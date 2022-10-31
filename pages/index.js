import { ShoppingCartIcon } from "@heroicons/react/solid";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
const Feed = dynamic(() => import("../components/Feed"));
const Banner = dynamic(() => import("../components/Banner"));
import { selectItems } from "../redux/slices/basketSlice";

export default function Home({ products, bannerProduct}) {
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Beauty Shop</title>
        <meta name="description" content="Buy Anything you want" />
        <link rel="icon" href="/icon.png" />
      </Head>

      {/* header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner bannerProduct={bannerProduct}/>

        {items.length > 0 && (
          <div
            className="sm:hidden flex mb-14 sticky top-20 z-40 h-fit
             bg-white p-5 mx-5 md:mx-10 lg:mt-8 shadow-xl"
          >
            <ShoppingCartIcon className="text-gray-700 h-10 mr-4" />
            <Link href="/checkout">
              <a className="button text-center mt-1">
                {items.length} :الوحدات الموجودة فى سلتك
              </a>
            </Link>
          </div>
        )}

        {/* feed */}
        <div
          dir="rtl"
          className="grid grid-flow-row-dense -mt-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:-mt-10 mx-auto"
        >
          <Feed products={products} />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const client = (await import("../sanity")).client;

  const query = `*[_type == "products"] | order(_createdAt desc){
    _id,
    name,
    price,
    categories,
    slug,
    "images":images[].asset->url,
    colors,
    sizes,
    details,
    reviews
  }`;

  const products = await client.fetch(query);

  let i = Math.floor(Math.random() * products.length);
  const bannerProduct = products[i];

  return {
    props: {
      products: products.sort(() => Math.random() - 0.5),
      bannerProduct,
      session,
    },
  };
}
