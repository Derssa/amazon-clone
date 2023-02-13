import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer"));
import Head from "next/head";

const refund_policy = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <Head>
        <title>Cheap Games Network | Politique de remboursement</title>
        <meta name="description" content="Politique de remboursement" />
        <meta name="robots" content="noindex,nofollow" />
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
      <Header />
      <main className="max-w-screen-2xl min-h-screen mx-auto p-8 text-justify">
        <h1 className="font-bold">Conditions d'achat</h1>
        <br />
        <p>
          L'achat de produits numériques, y compris comptes des jeux, de
          abonnements en ligne, etc..., est soumis aux termes et conditions
          suivants. Les consommateurs sont invités à lire attentivement avant de
          faire un achat.
        </p>
        <br />
        <br />
        <h1 className="font-bold">Politique de paiement + remboursement</h1>
        <br />
        <p>
          Toutes les transactions d'achat de comptes des jeux, de abonnements en
          ligne sont effectuées via des passerelles de paiement telles que
          PayPal ou Stripe qui utilisent le cryptage SSL. Ces passerelles de
          paiement sont sûres et sécurisées pour l'utilisation de tous les types
          de cartes de crédit et de cartes de débit dans différents pays et vos
          coordonnées ne sont pas stockées pendant ce processus.
        </p>
        <br />
        <p>
          Si nous n'avons pas livré votre produit après 24 heures, vous pouvez
          demander un remboursement. Votre achat étant un produit numérique, il
          est réputé "utilisé" après la livraison, et tous les achats effectués
          sur www.cheapgamesnetwork.com ne sont ni remboursables ni échangeables
          après le délivrement. Étant donné que les produits mis à disposition
          ici sont intangibles, il existe une politique stricte de
          non-remboursement.
        </p>
        <br />
        <p>
          Cheap Games Network se réserve le droit de modifier toute information,
          y compris, mais sans s'y limiter, les prix, les spécifications
          techniques, les conditions d'achat et les offres de produits ou de
          services sans préavis.
        </p>
        <br />
        <br />
        <h1 className="font-bold">Livraison de services</h1>
        <br />
        <p>
          Si vous ne recevez pas votre compte lors de l'achat, vous pouvez
          immédiatement contacter contact@CheapGamesNetwork.com avec vos détails
          de numero de transaction ou numero de telephone pour vous assurer que
          votre compte est livré dès que possible.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default refund_policy;
