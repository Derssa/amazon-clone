import { getSession, getProviders, signIn } from "next-auth/react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/Header"));
const GoogleButton = dynamic(() => import("react-google-button"));
import Head from "next/head";

export default function SignIn({ providers }) {
  return (
    <div>
      <Head>
        <title>SACKI | Connexion</title>
        <meta name="description" content="Connectez-vous à SACKI" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <div className="w-full flex flex-col justify-center items-center py-20">
        <p className="text-2xl font-medium text-gray-800 mb-4">CONNECT:</p>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <GoogleButton onClick={() => signIn(provider.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { providers },
  };
}
