import dynamic from "next/dynamic";
const Carousel = dynamic(() =>
  import("react-responsive-carousel").then((mod) => mod.Carousel)
);
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div
        className="absolute w-full h-32 bg-gradient-to-t
        from-gray-100 bottom-0 z-20"
      />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/c1.jpg" alt="c1" />
        </div>
        <div>
          <img loading="lazy" src="/c2.jpg" alt="c2" />
        </div>
        <div>
          <img loading="lazy" src="/c3.jpg" alt="c3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
