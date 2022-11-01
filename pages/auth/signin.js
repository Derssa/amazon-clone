import { getSession, getProviders, signIn } from "next-auth/react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/Header"));
const GoogleButton = dynamic(() => import("react-google-button"));
import Head from "next/head";

export default function SignIn({ providers }) {
  return (
    <div>
      <Head>
        <title>Beauty Shop | تسجيل الدخول</title>
        <meta name="description" content="Beauty Shop | تسجيل الدخول" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Header />
      <div className="w-full flex flex-col justify-center items-center py-20">
        <p className="text-2xl font-medium text-gray-800 mb-4">:تسجيل الدخول</p>
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
