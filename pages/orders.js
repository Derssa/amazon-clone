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
        <title>Commandes</title>
        <meta name="description" content="My orders" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Votre commandes
        </h1>
        {session ? (
          <h2>{orders.length} Commande(s)</h2>
        ) : (
          <h2>Connectez-vous pour voir vos commandes</h2>
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
    _createdAt
  }`;

  const orders = await client.fetch(query, { email: session.user.email });

  return {
    props: {
      orders,
    },
  };
}
