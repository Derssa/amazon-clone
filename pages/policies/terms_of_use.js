import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer"));
import Head from "next/head";

const terms_of_use = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <Head>
        <title>Cheap Games Network | Conditions d&apos;utilisation</title>
        <meta name="description" content="Conditions d'utilisation" />
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
        <h1 className="font-bold">Website Terms and Conditions of Use</h1>
        <br />
        <h2 className="font-semibold">1. Conditions</h2>

        <p>
          En accédant à ce site Web, accessible depuis CheapGamesNetwork.com,
          vous acceptez d&apos;être lié par les présentes conditions
          d&apos;utilisation du site Web et acceptez que vous êtes responsable
          de l&apos;accord avec toutes les lois locales applicables. Si vous
          n&apos;êtes pas d&apos;accord avec l&apos;un de ces termes, il vous
          est interdit d&apos;accéder à ce site. Les éléments contenus dans ce
          site Web sont protégés par le droit d&apos;auteur et le droit des
          marques.
        </p>

        <h2 className="font-semibold">2. Utiliser la licence</h2>

        <p>
          L&apos;autorisation est accordée de télécharger temporairement une
          copie des documents sur le site Web de CheapGamesNetwork pour une
          visualisation transitoire personnelle et non commerciale uniquement.
          Il s&apos;agit de l&apos;octroi d&apos;une licence, et non d&apos;un
          transfert de titre, et en vertu de cette licence, vous ne pouvez pas :
        </p>

        <ul className="list-disc">
          <li>modifier ou copier le matériel ;</li>
          <li>
            utiliser le matériel à des fins commerciales ou pour toute
            présentation publique ;
          </li>
          <li>
            tenter de désosser tout logiciel contenu sur le site Web de
            CheapGamesNetwork ;
          </li>
          <li>
            supprimer tout droit d&apos;auteur ou autres mentions de propriété
            des documents ; ou
          </li>
          <li>
            transférer le matériel à une autre personne ou &quot;miroir&quot; le
            matériel sur tout autre serveur.
          </li>
        </ul>

        <p>
          Cela permettra à CheapGamesNetwork de résilier en cas de violation de
          l&apos;une de ces restrictions. En cas de résiliation, votre droit de
          visionnage sera également résilié et vous devrez détruire tout
          matériel téléchargé en votre possession, qu&apos;il soit au format
          imprimé ou électronique.
        </p>

        <h2 className="font-semibold">3. Clause de non-responsabilité</h2>

        <p>
          Tous les éléments du site Web de CheapGamesNetwork sont fournis
          &quot;tels quels&quot;. CheapGamesNetwork ne donne aucune garantie,
          qu&apos;elle soit expresse ou implicite, annule donc toutes les autres
          garanties. En outre, CheapGamesNetwork ne fait aucune déclaration
          concernant l&apos;exactitude ou la fiabilité de l&apos;utilisation du
          matériel sur son site Web ou autrement lié à ce matériel ou à tout
          site lié à ce site Web.
        </p>

        <h2 className="font-semibold">4. Limites</h2>

        <p>
          CheapGamesNetwork ou ses fournisseurs ne seront pas tenus responsables
          des dommages qui résulteraient de l&apos;utilisation ou de
          l&apos;impossibilité d&apos;utiliser le matériel sur le site Web de
          CheapGamesNetwork, même si CheapGamesNetwork ou un représentant
          autorisé de ce site Web a été informé, oralement ou par écrit, de la
          possibilité de de tels dégâts. Certaines juridictions
          n&apos;autorisent pas les limitations sur les garanties implicites ou
          les limitations de responsabilité pour les dommages accessoires, ces
          limitations peuvent ne pas s&apos;appliquer à vous.
        </p>

        <h2 className="font-semibold">5. Révisions et errata</h2>

        <p>
          Le matériel apparaissant sur le site Web de CheapGamesNetwork peut
          contenir des erreurs techniques, typographiques ou photographiques.
          CheapGamesNetwork ne promettra pas que les éléments de ce site Web
          sont exacts, complets ou à jour. CheapGamesNetwork peut modifier les
          éléments contenus sur son site Web à tout moment et sans préavis.
          CheapGamesNetwork ne s&apos;engage pas à mettre à jour le matériel.
        </p>

        <h2 className="font-semibold">6. Liens</h2>

        <p>
          CheapGamesNetwork n&apos;a pas examiné tous les sites liés à son site
          Web et n&apos;est pas responsable du contenu de ces sites liés. La
          présence de tout lien n&apos;implique pas l&apos;approbation par
          CheapGamesNetwork du site. L’utilisation de tout site Web lié est aux
          risques et périls de l’utilisateur.
        </p>

        <h2 className="font-semibold">
          7. Modifications des conditions d&apos;utilisation du site
        </h2>

        <p>
          CheapGamesNetwork peut réviser les présentes conditions
          d&apos;utilisation de son site Web à tout moment et sans préavis. En
          utilisant ce site Web, vous acceptez d&apos;être lié par la version
          actuelle des présentes conditions d&apos;utilisation.
        </p>

        <h2 className="font-semibold">8. Votre informations privée</h2>

        <p>S&apos;il vous plait lisez notre politique de confidentialité.</p>

        <h2 className="font-semibold">9. Droit applicable</h2>

        <p>
          Toute réclamation liée au site Web de CheapGamesNetwork sera régie par
          les lois de fr sans égard à ses dispositions en matière de conflit de
          lois.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default terms_of_use;
