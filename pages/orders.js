import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/Header"));
const Order = dynamic(() => import("../components/Order"));

function Orders({ orders }) {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Beauty Shop | طلبياتي</title>
        <meta name="description" content="طلبياتي" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 dir="rtl" className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          كل طلبياتك
        </h1>
        {session ? (
          <h2 dir="rtl">{orders.length} طلبيات</h2>
        ) : (
          <h2 dir="rtl">سجل الدخول لعرض طلبياتك</h2>
        )}
        <div className="mt-5 space-y-4">
          {orders?.map((order) => (
            <Order key={order._id} order={order} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  //Get the user logged in credential
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const client = (await import("../sanity")).client;

  const query = `*[_type == "orders" && clientEmail==$email] | order(_createdAt desc){
    _id,
    amount,
    items,
    status,
    _createdAt
  }`;

  const orders = await client.fetch(query, { email: session.user.email });

  return {
    props: {
      orders,
    },
  };
}
