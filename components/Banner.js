import dynamic from "next/dynamic";
import Link from "next/link";
const Carousel = dynamic(() =>
  import("react-responsive-carousel").then((mod) => mod.Carousel)
);
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner({bannerProduct}) {
  return (
    <div className="relative">
      <div
        className="absolute w-full h-4 lg:h-20 bg-gradient-to-t
        from-gray-100 bottom-0 z-20"
      />
        <div className="flex flex-row mb-4">
          <img className="w-[60%] object-cover" loading="lazy" src={bannerProduct.images[0]} alt={bannerProduct.name} />
          <div dir="rtl" className="flex flex-col justify-center h-100 bg-[#fafafa] w-[40%] pr-6 sm:pr-12">
            <h2 className="hidden md:line-clamp-2 md:text-lg md:block">{bannerProduct.name}</h2>
            <h3 className="text-xs line-clamp-2 font-extrabold tracking-tight text-gray-900 sm:mt-1 sm:text-2xl lg:text-3xl">{bannerProduct.details}</h3>
            <Link href={`/product/${bannerProduct.slug.current}`}>
              <a className="drop-shadow-xl bg-[#c1ab4d] text-xs text-center font-bold mt-2 w-14 py-1 sm:mt-4 sm:w-20 sm:text-base">
                المزيد...
              </a>
            </Link>
          </div>
	</div>
    </div>
  );
}

export default Banner;
