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

export default function Home({ products, bannerProduct }) {
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Cheap Games Network</title>
        <meta
          name="description"
          content="استمتع بعرض كبير من المنتجات الرقمية مثل الألعاب و حسابات مشحونة و بطاقات الهدايا والبرامج وغير ذلك بأفضل الأسعار في السوق. لا تدفع الكثير ,اشتر بالرخيصة على CheapGamesNetwork.com"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner bannerProduct={bannerProduct} />

        {/*items.length > 0 && (
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
        )*/}

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
