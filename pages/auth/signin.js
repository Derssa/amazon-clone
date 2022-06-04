import { getSession, getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import GoogleButton from "react-google-button";

export default function SignIn({ providers }) {
  return (
    <div>
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
