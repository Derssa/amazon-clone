import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer"));
const PortableText = dynamic(() =>
  import("@portabletext/react").then((mod) => mod.PortableText)
);
const ShoppingCartIcon = dynamic(() =>
  import("@heroicons/react/solid").then((mod) => mod.ShoppingCartIcon)
);
const StarIcon = dynamic(() =>
  import("@heroicons/react/solid").then((mod) => mod.StarIcon)
);
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectItems } from "../../redux/slices/basketSlice";
import Head from "next/head";

const components = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => (
      <h1 className="text-2xl text-[#a18e3f] font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl text-[#a18e3f] font-bold my-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl text-[#a18e3f] font-bold my-4">{children}</h3>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="my-3">{children}</ul>,
    number: ({ children }) => <ol className="my-3">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disc" }}>{children}</li>
    ),
  },
};

function Slug({ product }) {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(
    product.colors === null ? "" : product.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes === null ? "" : product.sizes[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [inBasket, setInBasket] = useState(false);
  const items = useSelector(selectItems);

  useEffect(() => {
    if (items.find((item) => item.productId === product._id)) {
      setInBasket(true);
    }
  }, [items]);

  const addItemToBasket = () => {
    const productItem = {
      productId: product._id,
      name: product.name,
      image: selectedImage,
      quantity: 1,
      color: selectedColor.name,
      size: selectedSize.name,
      reviews: product.reviews,
      details: product.datails,
      price: selectedSize.price,
    };

    localStorage.setItem("items", JSON.stringify([...items, productItem]));
    dispatch(addToBasket(productItem));
    setInBasket(true);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function addProductJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "${product.name}",
      "image": ${product.images},
      "description": "${product.details}",
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "${product.reviews.average}",
          "bestRating": "5"
        },
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "${product.reviews.average}",
        "reviewCount": "${product.reviews.totalCount}"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://cheapgamesnetwork.com/product/${product.slug.current}",
        "priceCurrency": "EUR",
        "price": "${product.price}",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    }
  `,
    };
  }

  return (
    <div>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.details} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.details} />
        <meta property="og:image" content={product.images[0]} />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <Header />
      {items.length > 0 && (
        <div
          className="sm:hidden flex my-2 sticky top-16 z-40 h-fit
             bg-white p-5 mx-5 md:mx-10 lg:mt-8 shadow-xl"
        >
          <ShoppingCartIcon className="text-gray-700 h-10 mr-4" />
          <Link href="/checkout">
            <a className="button text-center mt-1">
              Votre panier: {items.length}
            </a>
          </Link>
        </div>
      )}
      <div className="bg-white min-h-screen">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <span className="mr-2 text-sm font-medium text-gray-900">
                    {product.categories[0]}
                  </span>
                </div>
              </li>
              <li className="text-sm">
                <h1
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product.name}
                </h1>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row items-center justify-between my-4">
            {/* Image gallery */}
            <div className="mx-8 my-2 md:w-1/2">
              <div className="flex flex-col lg:block">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-[700px] h-[300px] bg-gray-500 object-center object-cover"
                />
                {product.images.length > 1 && (
                  <div className="flex justify-between mt-4">
                    {product.images.map((image, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setSelectedImage(image);
                        }}
                      >
                        <img
                          src={image}
                          alt={`${product.name}${i}`}
                          className={`w-[80px] h-[60px] sm:w-[140px] sm:h-[80px] 
                        md:w-[80px] md:h-[60px] lg:w-[110px] lg:h-[80px] 
                        xl:w-[140px] xl:h-[80px]                      
                       ${
                         selectedImage === image && "border-2 border-gray-600"
                       } object-center object-cover rounded-lg cursor-pointer`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product info */}
            <div className="mx-8 my-2 md:w-1/2">
              {/* Options */}
              <div className="mt-4 lg:mt-0 lg:row-span-3">
                <h2 className="sr-only">Information produit</h2>
                <h1 className="text-2xl mb-2 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
                <p className="text-3xl text-gray-900">
                  {product.sizes !== null
                    ? selectedSize.price * quantity
                    : product.price * quantity}{" "}
                  €
                </p>

                {/* Reviews */}
                <div className="mt-2">
                  <h3 className="sr-only">Commentaires</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            product.reviews.average > rating
                              ? "text-gray-900"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">
                      {product.reviews.average} out of 5 stars
                    </p>
                    <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      {product.reviews.totalCount} stars
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <h2 className="text-sm font-medium text-gray-900">Détails</h2>

                  <div className="mt-2 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>

                <div className="mt-4">
                  {/* Quantity */}
                  {/*<div>
                    <h3 className="text-sm text-gray-900 font-medium">
                      Quantité
                    </h3>
                    <div className="flex items-center my-4">
                      <button
                        type="button"
                        className="bg-gray-700 border border-transparent rounded-l-xl w-9 h-9 flex items-center justify-center text-base font-medium text-white"
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <p className="border-gray-700 border border-transparent w-10 h-9 flex items-center justify-center text-base font-medium">
                        {quantity}
                      </p>
                      <button
                        type="button"
                        className="bg-gray-700 border border-transparent rounded-r-xl w-9 h-9 flex items-center justify-center text-base font-medium text-white"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                      </div>*/}
                  {/* Colors */}
                  {product.colors !== null && (
                    <div>
                      <h3 className="text-sm text-gray-900 font-medium">
                        Couleur
                      </h3>
                      <RadioGroup
                        value={selectedColor}
                        onChange={setSelectedColor}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          Choose a color
                        </RadioGroup.Label>

                        <div className="flex items-center space-x-3">
                          {product.colors.map((color) => (
                            <RadioGroup.Option
                              key={color.name}
                              value={color}
                              className={({ active, checked }) =>
                                classNames(
                                  "ring-gray-600",
                                  active && checked ? "ring ring-offset-1" : "",
                                  !active && checked ? "ring-2" : "",
                                  "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                )
                              }
                            >
                              <RadioGroup.Label as="span" className="sr-only">
                                {color.name}
                              </RadioGroup.Label>
                              <span
                                style={{
                                  backgroundColor: color.class,
                                }}
                                className="h-8 w-8 border border-black border-opacity-10 rounded-full"
                              />
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  )}

                  {/* Sizes */}
                  {product.sizes !== null && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm text-gray-900 font-medium">
                          Taille
                        </h3>
                      </div>

                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="mt-4"
                      >
                        <RadioGroup.Label className="sr-only">
                          Choisissez une taille
                        </RadioGroup.Label>
                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                          {product.sizes.map((size) => (
                            <RadioGroup.Option
                              key={size._key}
                              value={size}
                              disabled={!size.inStock}
                              className={({ active }) =>
                                classNames(
                                  size.inStock
                                    ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                    : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                  active ? "ring-2 ring-[#8c7c3a]" : "",
                                  "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <RadioGroup.Label as="span">
                                    {size.name}
                                  </RadioGroup.Label>
                                  {size.inStock ? (
                                    <span
                                      className={classNames(
                                        active ? "border" : "border-2",
                                        checked
                                          ? "border-indigo-500"
                                          : "border-transparent",
                                        "absolute -inset-px rounded-md pointer-events-none"
                                      )}
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                    >
                                      <svg
                                        className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line
                                          x1={0}
                                          y1={100}
                                          x2={100}
                                          y2={0}
                                          vectorEffect="non-scaling-stroke"
                                        />
                                      </svg>
                                    </span>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                  <button
                    disabled={inBasket}
                    onClick={addItemToBasket}
                    className={`mt-6 w-full ${
                      inBasket
                        ? "bg-gray-400"
                        : "bg-[#44de2c] hover:bg-[#67fa50]"
                    } border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111]`}
                  >
                    {inBasket ? "Dans votre panier" : "Ajouter au panier"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 text-justify">
          <h1 className="text-xl font-bold mb-4">Description:</h1>
          <PortableText value={product.content} components={components} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Slug;

export const getStaticPaths = async () => {
  const client = (await import("../../sanity")).client;
  const query = `*[_type == "products"]{
        _id,
        slug {
            current
        }
      }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const client = (await import("../../sanity")).client;
  const query = `*[_type=="products" && slug.current==$slug][0]{
    _id,
    name,
    price,
    categories,
    slug,
    "images":images[].asset->url,
    colors,
    sizes,
    details,
    reviews,
    content
      }`;

  const product = await client.fetch(query, {
    slug: params?.slug,
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};
