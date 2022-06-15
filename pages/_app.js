import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((RP) => {
        RP.init(`${process.env.FB_PIXEL}`);
        RP.pageView();

        router.events.on("routeChangeComplete", () => {
          RP.pageView();
        });
      });
    return () => {
      router.events.off("routeChangeComplete", () => {
        RP.pageView();
      });
    };
  }, [router.events]);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        <Script
          id="gtag"
          strategy="lazyOnload"
        >{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GOOGLE_ANALYTICS}');`}</Script>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
