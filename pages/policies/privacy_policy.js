import React from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer"));
import Head from "next/head";

const privacy_policy = () => {
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <Head>
        <title>Cheap Games Network | Politique de confidentialité</title>
        <meta name="description" content="Politique de confidentialité" />
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
        <h1 className="font-bold text-lg">Politique de confidentialité</h1>
        <br />

        <p>Dernière mise à jour : 10 février 2023</p>
        <p>
          Cette politique de confidentialité décrit nos politiques et procédures
          sur la collecte, l&apos;utilisation et la divulgation de vos
          informations lorsque vous utilisez le service et vous informe sur vos
          droits en matière de confidentialité et sur la manière dont la loi
          vous protège.
        </p>
        <p>
          Nous utilisons vos données personnelles pour fournir et améliorer le
          service. En utilisant le Service, Vous acceptez la collecte et
          l&apos;utilisation d&apos;informations conformément à la présente
          Politique de confidentialité.
        </p>
        <br />
        <h1 className="font-bold text-lg">Interprétation et définitions</h1>
        <br />

        <h2 className="font-semibold">Interprétation</h2>
        <p>
          Les mots dont la lettre initiale est en majuscule ont des
          significations définies dans les conditions suivantes. Les définitions
          suivantes auront la même signification, qu&apos;elles apparaissent au
          singulier ou au pluriel.
        </p>
        <h2 className="font-semibold">Définitions</h2>
        <p>Aux fins de la présente politique de confidentialité :</p>
        <ul className="list-disc">
          <li>
            <p>
              <strong>Compte</strong> désigne un compte unique créé pour vous
              permettre d&apos;accéder à notre Service ou à des parties de notre
              Service.
            </p>
          </li>
          <li>
            <p>
              <strong>Affilié</strong> désigne une entité qui contrôle, est
              contrôlée par ou est sous contrôle commun avec une partie, où
              &quot;contrôle&quot; signifie la propriété de 50 % ou plus des
              actions, participations ou autres titres ayant droit voter pour
              l&apos;élection des administrateurs ou d&apos;une autre autorité
              de gestion.
            </p>
          </li>
          <li>
            <p>
              <strong>Société</strong> (ci-après dénommée « la Société »,
              « Nous », « Notre » ou « Notre » dans le présent Contrat) fait
              référence à CheapGamesNetwork.
            </p>
          </li>
          <li>
            <p>
              <strong>Les cookies</strong> sont de petits fichiers qui sont
              placés sur votre ordinateur, appareil mobile ou tout autre
              appareil par un site Web, contenant les détails de votre
              historique de navigation sur ce site Web parmi ses nombreuses
              utilisations.
            </p>
          </li>
          <li>
            <p>
              <strong>Pays</strong> fait référence à : France
            </p>
          </li>
          <li>
            <p>
              <strong>Appareil</strong> désigne tout appareil pouvant accéder au
              Service tel qu&apos;un ordinateur, un téléphone portable ou une
              tablette numérique.
            </p>
          </li>
          <li>
            <p>
              <strong>Les données personnelles</strong> sont toutes les
              informations relatives à une personne identifiée ou identifiable.
            </p>
          </li>
          <li>
            <p>
              <strong>Service</strong> fait référence au site Web.
            </p>
          </li>
          <li>
            <p>
              <strong>Prestataire de services</strong> désigne toute personne
              physique ou morale qui traite les données pour le compte de la
              Société. Il fait référence à des sociétés tierces ou à des
              personnes employées par la Société pour faciliter le Service, pour
              fournir le Service au nom de la Société, pour effectuer des
              services liés au Service ou pour aider la Société à analyser la
              manière dont le Service est utilisé.
            </p>
          </li>
          <li>
            <p>
              <strong>Service de médias sociaux tiers</strong> désigne tout site
              Web ou tout site Web de réseau social par lequel un utilisateur
              peut se connecter ou créer un compte pour utiliser le service.
            </p>
          </li>
          <li>
            <p>
              <strong>Données d&apos;utilisation</strong> fait référence aux
              données collectées automatiquement, soit générées par
              l&apos;utilisation du Service, soit à partir de
              l&apos;infrastructure du Service elle-même (par exemple, la durée
              d&apos;une visite de page).
            </p>
          </li>
          <li>
            <p>
              <strong>Site Web</strong> fait référence à CheapGamesNetwork,
              accessible depuis{" "}
              <a
                href="http://www.CheapGamesNetwork.com"
                rel="external nofollow noopener noreferrer"
                target="_blank"
              >
                http://www.CheapGamesNetwork.com
              </a>
            </p>
          </li>
          <li>
            <p>
              <strong>Vous</strong> désigne la personne accédant ou utilisant le
              Service, ou la société ou toute autre entité juridique au nom de
              laquelle cette personne accède ou utilise le Service, selon le
              cas.
            </p>
          </li>
        </ul>
        <br />
        <h1 className="font-bold text-lg">
          Collecte et utilisation de vos données personnelles
        </h1>
        <br />

        <h2 className="font-semibold">Types de données collectées</h2>
        <h3>Données personnelles</h3>
        <p>
          Lorsque vous utilisez Notre Service, Nous pouvons Vous demander de
          Nous fournir certaines informations personnellement identifiables qui
          peuvent être utilisées pour Vous contacter ou Vous identifier. Les
          informations personnellement identifiables peuvent inclure, mais sans
          s&apos;y limiter :
        </p>
        <ul className="list-disc">
          <li>
            <p>Adresse e-mail</p>
          </li>
          <li>
            <p>Prénom et nom</p>
          </li>
          <li>
            <p>Numéro de téléphone</p>
          </li>
          <li>
            <p>Données d&apos;utilisation</p>
          </li>
        </ul>
        <h3>Données d&apos;utilisation</h3>
        <p>
          Les données d&apos;utilisation sont collectées automatiquement lors de
          l&apos;utilisation du service.
        </p>
        <p>
          Les données d&apos;utilisation peuvent inclure des informations telles
          que l&apos;adresse de protocole Internet de votre appareil (par
          exemple, l&apos;adresse IP), le type de navigateur, la version du
          navigateur, les pages de notre service que vous visitez, l&apos;heure
          et la date de votre visite, le temps passé sur ces pages , des
          identifiants d&apos;appareil uniques et d&apos;autres données de
          diagnostic.
        </p>
        <p>
          Lorsque vous accédez au Service par ou via un appareil mobile, nous
          pouvons collecter certaines informations automatiquement, y compris,
          mais sans s&apos;y limiter, le type d&apos;appareil mobile que vous
          utilisez, l&apos;identifiant unique de votre appareil mobile,
          l&apos;adresse IP de votre appareil mobile , votre système
          d&apos;exploitation mobile, le type de navigateur Internet mobile que
          vous utilisez, les identifiants uniques de l&apos;appareil et
          d&apos;autres données de diagnostic.
        </p>
        <p>
          Nous pouvons également collecter des informations que votre navigateur
          envoie chaque fois que vous visitez notre service ou lorsque vous
          accédez au service par ou via un appareil mobile.
        </p>
        <h3>Informations provenant de services de médias sociaux tiers</h3>
        <p>
          La Société vous permet de créer un compte et de vous connecter pour
          utiliser le Service via les services de médias sociaux tiers
          suivants :
        </p>
        <ul className="list-disc">
          <li>Google</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Linked In</li>
        </ul>
        <p>
          Si vous décidez de vous inscrire via ou de nous accorder l&apos;accès
          à un service de médias sociaux tiers, nous pouvons collecter des
          données personnelles déjà associées au compte de votre service de
          médias sociaux tiers, telles que votre nom, votre adresse e-mail , Vos
          activités ou Votre liste de contacts associée à ce compte.
        </p>
        <p>
          Vous pouvez également avoir la possibilité de partager des
          informations supplémentaires avec la Société via le compte de votre
          service de médias sociaux tiers. Si vous choisissez de fournir ces
          informations et données personnelles, lors de l&apos;inscription ou
          autrement, vous autorisez la société à les utiliser, les partager et
          les stocker d&apos;une manière conforme à la présente politique de
          confidentialité.
        </p>
        <h3>Technologies de suivi et cookies</h3>
        <p>
          Nous utilisons des cookies et des technologies de suivi similaires
          pour suivre l&apos;activité sur notre service et stocker certaines
          informations. Les technologies de suivi utilisées sont des balises,
          des balises et des scripts pour collecter et suivre les informations
          et pour améliorer et analyser notre service. Les technologies que nous
          utilisons peuvent inclure :
        </p>
        <ul className="list-disc">
          <li>
            <strong>Cookies ou cookies de navigateur.</strong> Un cookie est un
            petit fichier placé sur votre appareil. Vous pouvez demander à Votre
            navigateur de refuser tous les Cookies ou de vous signaler
            l&apos;envoi d&apos;un Cookie. Cependant, si vous n&apos;acceptez
            pas les cookies, vous ne pourrez peut-être pas utiliser certaines
            parties de notre service. À moins que vous n&apos;ayez réglé les
            paramètres de votre navigateur pour qu&apos;il refuse les cookies,
            notre service peut utiliser des cookies.
          </li>
          <li>
            <strong>Balises Web.</strong> Certaines sections de notre Service et
            de nos e-mails peuvent contenir de petits fichiers électroniques
            connus sous le nom de balises Web (également appelés gifs
            transparents, pixels invisibles et gifs à pixel unique) qui
            permettent le Société, par exemple, pour compter les utilisateurs
            qui ont visité ces pages ou ouvert un e-mail et pour d&apos;autres
            statistiques de site Web connexes (par exemple, enregistrer la
            popularité d&apos;une certaine section et vérifier l&apos;intégrité
            du système et du serveur).
          </li>
        </ul>
        <p>
          Les cookies peuvent être &quot;Persistants&quot; ou
          &quot;Session&quot; Biscuits. Les cookies persistants restent sur
          votre ordinateur personnel ou votre appareil mobile lorsque vous vous
          déconnectez, tandis que les cookies de session sont supprimés dès que
          vous fermez votre navigateur Web.
        </p>
        <p>
          Nous utilisons à la fois des cookies de session et des cookies
          persistants aux fins décrites ci-dessous :
        </p>
        <ul className="list-disc">
          <li>
            <p>
              <strong>Cookies nécessaires/essentiels</strong>
            </p>
            <p>Type : Cookies de session</p>
            <p>Géré par : Nous</p>
            <p>
              Objectif : Ces cookies sont essentiels pour vous fournir les
              services disponibles via le site Web et pour vous permettre
              d&apos;utiliser certaines de ses fonctionnalités. Ils aident à
              authentifier les utilisateurs et à empêcher l&apos;utilisation
              frauduleuse des comptes d&apos;utilisateurs. Sans ces cookies, les
              services que vous avez demandés ne peuvent pas être fournis, et
              nous n&apos;utilisons ces cookies que pour vous fournir ces
              services.
            </p>
          </li>
          <li>
            <p>
              <strong>
                Politique relative aux cookies / Avis d&apos;acceptation des
                cookies
              </strong>
            </p>
            <p>Type : Cookies persistants</p>
            <p>Géré par : Nous</p>
            <p>
              Objectif : Ces cookies identifient si les utilisateurs ont accepté
              l&apos;utilisation de cookies sur le site Web.
            </p>
          </li>
          <li>
            <p>
              <strong>Cookies de fonctionnalité</strong>
            </p>
            <p>Type : Cookies persistants</p>
            <p>Géré par : Nous</p>
            <p>
              Objectif : ces cookies nous permettent de mémoriser les choix que
              vous faites lorsque vous utilisez le site Web, tels que la
              mémorisation de vos informations de connexion ou de votre
              préférence de langue. Le but de ces Cookies est de Vous offrir une
              expérience plus personnelle et de Vous éviter d&apos;avoir à
              ressaisir vos préférences à chaque fois que Vous utilisez le Site.
            </p>
          </li>
        </ul>
        <p>
          Pour plus d&apos;informations sur les cookies que nous utilisons et
          vos choix concernant les cookies, veuillez consulter notre Politique
          relative aux cookies ou la section Cookies de notre Politique de
          confidentialité.
        </p>
        <h2 className="font-semibold">
          Utilisation de vos données personnelles
        </h2>
        <p>
          La Société peut utiliser les Données personnelles aux fins suivantes :
        </p>
        <ul className="list-disc">
          <li>
            <p>
              <strong>Pour fournir et maintenir notre Service</strong>, y
              compris pour surveiller l&apos;utilisation de notre Service.
            </p>
          </li>
          <li>
            <p>
              <strong>Pour gérer Votre Compte :</strong> pour gérer Votre
              inscription en tant qu&apos;utilisateur du Service. Les données
              personnelles que vous fournissez peuvent vous donner accès à
              différentes fonctionnalités du service qui sont à votre
              disposition en tant qu&apos;utilisateur enregistré.
            </p>
          </li>
          <li>
            <p>
              <strong>Pour l&apos;exécution d&apos;un contrat :</strong>{" "}
              l&apos;élaboration, le respect et l&apos;exécution du contrat
              d&apos;achat des produits, articles ou services que vous avez
              achetés ou de tout autre contrat avec nous via le service.
            </p>
          </li>
          <li>
            <p>
              <strong>Pour vous contacter :</strong> pour vous contacter par
              e-mail, appels téléphoniques, SMS ou autres formes de
              communication électronique équivalentes, telles que les
              notifications push d&apos;une application mobile concernant les
              mises à jour ou les communications informatives liées aux
              fonctionnalités, produits ou services sous-traités, y compris les
              mises à jour de sécurité, lorsque cela est nécessaire ou
              raisonnable pour leur mise en œuvre.
            </p>
          </li>
          <li>
            <p>
              <strong>Pour vous fournir</strong> des actualités, des offres
              spéciales et des informations générales sur d&apos;autres biens,
              services et événements que nous proposons et qui sont similaires à
              ceux que vous avez déjà achetés ou sur lesquels vous vous êtes
              renseigné, sauf si vous avez choisi de ne pas le faire recevoir
              ces informations.
            </p>
          </li>
          <li>
            <p>
              <strong>Pour gérer Vos demandes :</strong> Pour nous assister et
              gérer Vos demandes.
            </p>
          </li>
          <li>
            <p>
              <strong>Pour les transferts d&apos;entreprise :</strong> Nous
              pouvons utiliser Vos informations pour évaluer ou mener une
              fusion, une cession, une restructuration, une réorganisation, une
              dissolution ou toute autre vente ou transfert de tout ou partie de
              Nos actifs, que ce soit en tant que en cours d&apos;exploitation
              ou dans le cadre d&apos;une faillite, d&apos;une liquidation ou
              d&apos;une procédure similaire, dans laquelle les données
              personnelles que nous détenons sur les utilisateurs de nos
              services font partie des actifs transférés.
            </p>
          </li>
          <li>
            <p>
              <strong>À d&apos;autres fins</strong> : nous pouvons utiliser vos
              informations à d&apos;autres fins, telles que l&apos;analyse de
              données, l&apos;identification des tendances d&apos;utilisation,
              la détermination de l&apos;efficacité de nos campagnes
              promotionnelles et pour évaluer et améliorer notre service, nos
              produits, nos services , le marketing et votre expérience.
            </p>
          </li>
        </ul>
        <p>
          Nous pouvons partager vos informations personnelles dans les
          situations suivantes :
        </p>
        <ul className="list-disc">
          <li>
            <strong>Avec les fournisseurs de services :</strong> nous pouvons
            partager vos informations personnelles avec les fournisseurs de
            services pour surveiller et analyser l&apos;utilisation de notre
            service, pour vous contacter.
          </li>
          <li>
            <strong>Pour les transferts d&apos;entreprise :</strong> Nous
            pouvons partager ou transférer Vos informations personnelles dans le
            cadre de, ou pendant les négociations de, toute fusion, vente
            d&apos;actifs de la Société, financement ou acquisition de tout ou
            partie de Notre entreprise à une autre société.
          </li>
          <li>
            <strong>Avec les affiliés :</strong> nous pouvons partager vos
            informations avec nos affiliés, auquel cas nous exigerons de ces
            affiliés qu&apos;ils respectent la présente politique de
            confidentialité. Les sociétés affiliées incluent notre société mère
            et toutes autres filiales, partenaires de coentreprise ou autres
            sociétés que nous contrôlons ou qui sont sous contrôle commun avec
            nous.
          </li>
          <li>
            <strong>Avec des partenaires commerciaux :</strong> nous pouvons
            partager vos informations avec nos partenaires commerciaux pour vous
            proposer certains produits, services ou promotions.
          </li>
          <li>
            <strong>Avec d&apos;autres utilisateurs :</strong> lorsque vous
            partagez des informations personnelles ou interagissez autrement
            dans les zones publiques avec d&apos;autres utilisateurs, ces
            informations peuvent être vues par tous les utilisateurs et peuvent
            être diffusées publiquement à l&apos;extérieur. Si vous interagissez
            avec d&apos;autres utilisateurs ou que vous vous inscrivez via un
            service de médias sociaux tiers, vos contacts sur le service de
            médias sociaux tiers peuvent voir votre nom, votre profil, vos
            photos et la description de votre activité. De même, les autres
            utilisateurs pourront voir les descriptions de votre activité,
            communiquer avec vous et consulter votre profil.
          </li>
          <li>
            <strong>Avec Votre consentement</strong> : Nous pouvons divulguer
            Vos informations personnelles à toute autre fin avec Votre
            consentement.
          </li>
        </ul>
        <h2 className="font-semibold">
          Conservation de vos données personnelles
        </h2>
        <p>
          La Société ne conservera vos données personnelles que le temps
          nécessaire aux fins énoncées dans la présente politique de
          confidentialité. Nous conserverons et utiliserons vos données
          personnelles dans la mesure nécessaire pour nous conformer à nos
          obligations légales (par exemple, si nous sommes tenus de conserver
          vos données pour nous conformer aux lois applicables), résoudre les
          litiges et appliquer nos accords et politiques juridiques.
        </p>
        <p>
          La Société conservera également les Données d&apos;utilisation à des
          fins d&apos;analyse interne. Les données d&apos;utilisation sont
          généralement conservées pendant une période plus courte, sauf lorsque
          ces données sont utilisées pour renforcer la sécurité ou pour
          améliorer la fonctionnalité de notre service, ou lorsque nous sommes
          légalement tenus de conserver ces données pendant des périodes plus
          longues.
        </p>
        <h2 className="font-semibold">Transfert de vos données personnelles</h2>
        <p>
          Vos informations, y compris les données personnelles, sont traitées
          dans les bureaux d&apos;exploitation de la société et dans tout autre
          lieu où se trouvent les parties impliquées dans le traitement. Cela
          signifie que ces informations peuvent être transférées et conservées
          sur des ordinateurs situés en dehors de votre état, province, pays ou
          autre juridiction gouvernementale où les lois sur la protection des
          données peuvent différer de celles de votre juridiction.
        </p>
        <p>
          Votre consentement à cette politique de confidentialité suivi de votre
          soumission de ces informations représente votre accord à ce transfert.
        </p>
        <p>
          La Société prendra toutes les mesures raisonnablement nécessaires pour
          s&apos;assurer que Vos données sont traitées en toute sécurité et
          conformément à la présente Politique de confidentialité et aucun
          transfert de Vos Données personnelles n&apos;aura lieu vers une
          organisation ou un pays à moins que des contrôles adéquats ne soient
          en place, y compris la sécurité de vos données et autres informations
          personnelles.
        </p>
        <h2 className="font-semibold">Supprimer vos données personnelles</h2>
        <p>
          Vous avez le droit de supprimer ou de demander que nous vous aidions à
          supprimer les données personnelles que nous avons collectées à votre
          sujet.
        </p>
        <p>
          Notre service peut vous donner la possibilité de supprimer certaines
          informations vous concernant depuis le service.
        </p>
        <p>
          Vous pouvez mettre à jour, modifier ou supprimer vos informations à
          tout moment en vous connectant à votre compte, si vous en avez un, et
          en visitant la section des paramètres du compte qui vous permet de
          gérer vos informations personnelles. Vous pouvez également nous
          contacter pour demander l&apos;accès, la correction ou la suppression
          de toute information personnelle que vous nous avez fournie.
        </p>
        <p>
          Veuillez noter, cependant, que nous pouvons avoir besoin de conserver
          certaines informations lorsque nous avons une obligation légale ou une
          base légale pour le faire.
        </p>
        <h2 className="font-semibold">
          Divulgation de vos données personnelles
        </h2>
        <h3>Transactions commerciales</h3>
        <p>
          Si la Société est impliquée dans une fusion, une acquisition ou une
          vente d&apos;actifs, vos données personnelles peuvent être
          transférées. Nous vous informerons avant que vos données personnelles
          ne soient transférées et soumises à une politique de confidentialité
          différente.
        </p>
        <h3>Application de la loi</h3>
        <p>
          Dans certaines circonstances, la Société peut être tenue de divulguer
          vos données personnelles si la loi l&apos;exige ou en réponse à des
          demandes valables d&apos;autorités publiques (par exemple, un tribunal
          ou une agence gouvernementale).
        </p>
        <h3>Autres exigences légales</h3>
        <p>
          La Société peut divulguer Vos Données Personnelles en croyant de bonne
          foi qu&apos;une telle action est nécessaire pour :
        </p>
        <ul className="list-disc">
          <li>Se conformer à une obligation légale</li>
          <li>Protéger et défendre les droits ou la propriété de la Société</li>
          <li>
            Prévenir ou enquêter sur d&apos;éventuels actes répréhensibles en
            rapport avec le Service
          </li>
          <li>
            Protéger la sécurité personnelle des Utilisateurs du Service ou du
            public
          </li>
          <li>Protection contre la responsabilité légale</li>
        </ul>
        <h2 className="font-semibold">Sécurité de vos données personnelles</h2>
        <p>
          La sécurité de vos données personnelles est importante pour nous, mais
          n&apos;oubliez pas qu&apos;aucune méthode de transmission sur Internet
          ou méthode de stockage électronique n&apos;est sécurisée à 100 %. Bien
          que nous nous efforcions d&apos;utiliser des moyens commercialement
          acceptables pour protéger vos données personnelles, nous ne pouvons
          garantir leur sécurité absolue.
        </p>
        <br />
        <h1 className="font-bold text-lg">Confidentialité des enfants</h1>
        <br />

        <p>
          Notre service ne s&apos;adresse pas aux personnes de moins de 13 ans.
          Nous ne collectons pas sciemment d&apos;informations personnellement
          identifiables auprès de personnes de moins de 13 ans. Si vous êtes un
          parent ou un tuteur et que vous savez que votre enfant nous a fourni
          des informations personnelles. Données, veuillez nous contacter. Si
          nous apprenons que nous avons collecté des données personnelles auprès
          d&apos;une personne de moins de 13 ans sans vérification du
          consentement parental, nous prenons des mesures pour supprimer ces
          informations de nos serveurs.
        </p>
        <p>
          Si nous devons compter sur le consentement comme base légale pour le
          traitement de vos informations et que votre pays exige le consentement
          d&apos;un parent, nous pouvons exiger le consentement de votre parent
          avant de collecter et d&apos;utiliser ces informations.
        </p>
        <br />
        <h1 className="font-bold text-lg">
          Liens vers d&apos;autres sites Web
        </h1>
        <br />

        <p>
          Notre Service peut contenir des liens vers d&apos;autres sites Web qui
          ne sont pas exploités par Nous. Si vous cliquez sur un lien tiers,
          vous serez dirigé vers le site de ce tiers. Nous vous conseillons
          vivement de consulter la politique de confidentialité de chaque site
          que vous visitez.
        </p>
        <p>
          Nous n&apos;avons aucun contrôle et n&apos;assumons aucune
          responsabilité quant au contenu, aux politiques de confidentialité ou
          aux pratiques des sites ou services tiers.
        </p>
        <br />
        <h1 className="font-bold text-lg">
          Modifications de cette politique de confidentialité
        </h1>
        <br />

        <p>
          Nous pouvons mettre à jour notre politique de confidentialité de temps
          à autre. Nous vous informerons de tout changement en publiant la
          nouvelle politique de confidentialité sur cette page.
        </p>
        <p>
          Nous vous informerons par e-mail et/ou par un avis visible sur notre
          service, avant que le changement ne devienne effectif et mettrons à
          jour la &quot;Dernière mise à jour&quot; date en haut de cette
          politique de confidentialité.
        </p>
        <p>
          Il vous est conseillé de consulter régulièrement cette politique de
          confidentialité pour tout changement. Les modifications apportées à
          cette politique de confidentialité entrent en vigueur
          lorsqu&apos;elles sont publiées sur cette page.
        </p>
        <br />
        <h1 className="font-bold text-lg">Contactez-nous</h1>
        <br />

        <p>
          Si vous avez des questions sur cette politique de confidentialité,
          vous pouvez nous contacter :
        </p>
        <ul className="list-disc">
          <li>Par mail : contact@CheapGamesNetwork.com</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default privacy_policy;
