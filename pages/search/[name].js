import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const ShoppingCartIcon = dynamic(() =>
  import("@heroicons/react/solid").then((mod) => mod.ShoppingCartIcon)
);
const Header = dynamic(() => import("../../components/Header"));
const Feed = dynamic(() => import("../../components/Feed"));
import { selectItems } from "../../redux/slices/basketSlice";

export default function Name({ products }) {
  const router = useRouter();
  const { name } = router.query;
  const items = useSelector(selectItems);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>{name}</title>
        <meta name="description" content={name} />
        <link rel="icon" href="/icon.png" />
      </Head>

      {/* header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {items.length > 0 && (
          <div
            className="sm:hidden flex my-4 sticky top-20 z-40 h-fit
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
          className="grid grid-flow-row-dense mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto"
        >
          <Feed products={products} />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { name } = context.params;
  const client = (await import("../../sanity")).client;

  const queryS = `*[_type == "products" && name match $name] | order(_createdAt desc){
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

  const products = await client.fetch(queryS, {
    name,
  });

  return {
    props: {
      products,
      session,
    },
  };
}
