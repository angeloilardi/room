
import Carousel from "./components/Carousel";
import IconArrow from "./components/IconArrow";
import Navbar from "./components/Navbar";

const slidesMobile = [
  "./images/mobile-image-hero-1.jpg",
  "./images/mobile-image-hero-2.jpg",
  "./images/mobile-image-hero-3.jpg",
];
export default function Home() {
  return (
    <>
      <div className="w-full relative">
        <Carousel slides={slidesMobile} />
        {/* <img
          src="./images/mobile-image-hero-1.jpg"
          alt=""
          className="object-cover"
        /> */}

        {/* Slider buttons */}
        {/* <div className="absolute bottom-0 right-0 flex items-center justify-center">
          <button className="bg-black w-14 h-14 flex items-center justify-center">
            <img src="./images/icon-angle-left.svg" alt="" />
          </button>
          <button className="bg-black w-14 h-14 flex items-center justify-center">
            <img src="./images/icon-angle-right.svg" alt="" />
          </button>
        </div> */}
      </div>
      <section className="bg-white p-8">
        <h1 className="text-4xl font-[500] text-black">
          Discover innovative ways to decorate
        </h1>
        <p className="text-dark-gray font-[500] mt-5">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button className="tracking-[.85rem] py-6 inline-block">
          SHOP NOW
          <IconArrow />
        </button>
      </section>
      <img src="./images/image-about-dark.jpg" alt="" className="w-full" />
      <section className="bg-white p-8">
        <h1 className="font-[500] text-xl tracking-[.2rem] text-black">
          ABOUT OUR FURNITURE
        </h1>
        <p className="text-dark-gray font-[500] mt-5">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </section>
      <img src="./images/image-about-light.jpg" alt="" />
    </>
  );
}
