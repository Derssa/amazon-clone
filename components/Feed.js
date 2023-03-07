import dynamic from "next/dynamic";
const Product = dynamic(() => import("./Product"));

function Feed({ products }) {
  return (
    <>
      {products.slice(0, 4).map((product) => (
        <Product key={product._id} product={product} />
      ))}

      <img
        className="md:col-span-full mb-6"
        src="/pub1.jpg"
        alt="pub"
        loading="lazy"
      />

      <div className="md:col-span-1">
        {products.slice(4, 5).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {products.slice(5, products.length).map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </>
  );
}

export default Feed;
